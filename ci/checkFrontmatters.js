const Yup = require('yup')
const glob = require('glob')
const fm = require('front-matter')
const statuses = require('./statuses')
const fs = require('fs/promises')
const { promisify } = require('util')
const g = promisify(glob)

const snapshotIdRegex = /^https?:\/\/(snapshot.org).*\/([A-z0-9]{7,})$/

const commonValidationSchema = Yup.object().shape({
  file: Yup.string().required(),
  title: Yup.string().required(),
  type: Yup.string().oneOf(['Meta-Governance', 'Governance']).required(),
  proposal: Yup.string().matches(snapshotIdRegex),
  status: Yup.string().oneOf(statuses),
  author: Yup.string().required(),
  network: Yup.string()
    .oneOf(['Ethereum', 'Optimism', 'Ethereum & Optimism'])
    .required(),
  implementor: Yup.string().nullable(),
  release: Yup.string().nullable(),
  created: Yup.date().nullable(),
  updated: Yup.date().nullable(),
  requires: Yup.mixed().nullable(),
  'discussions-to': Yup.string().nullable(),
})

const sipValidationSchema = commonValidationSchema
  .concat(
    Yup.object().shape({
      sip: Yup.number().required(),
      network: Yup.string().required(),
    }),
  )
  .noUnknown()
  .strict()

const sccpValidationSchema = commonValidationSchema
  .concat(
    Yup.object().shape({
      sccp: Yup.number().required(),
    }),
  )
  .noUnknown()
  .strict()

const stpValidationSchema = Yup.object()
  .shape({
    file: Yup.string().required(),
    stp: Yup.number().required(),
    title: Yup.string().required(),
    status: Yup.string().oneOf(statuses),
    author: Yup.string().required(),
    [`implementation-date`]: Yup.string().nullable(),
    [`discussions-to`]: Yup.string().nullable(),
    created: Yup.date().nullable(),
    requires: Yup.mixed().nullable(),
  })
  .noUnknown()
  .strict()

;(async () => {
  try {
    const sips = await g('./content/sips/*.md')
    const stps = await g('./content/stps/*.md')
    const sccp = await g('./content/sccp/*.md')

    // SIP
    await Promise.all(
      sips.map(async (file) => {
        const content = await fs.readFile(file, 'utf-8')
        const { attributes } = fm(content)
        const castValues = sipValidationSchema.cast({ file, ...attributes })
        return await sipValidationSchema.validate(castValues)
      }),
    )
    // STP
    await Promise.all(
      stps.map(async (file) => {
        const content = await fs.readFile(file, 'utf-8')
        const { attributes } = fm(content)
        const castValues = stpValidationSchema.cast({ file, ...attributes })
        return await stpValidationSchema.validate(castValues)
      }),
    )
    // SCCP
    await Promise.all(
      sccp.map(async (file) => {
        const content = await fs.readFile(file, 'utf-8')
        const { attributes } = fm(content)
        const castValues = sccpValidationSchema.cast({ file, ...attributes })
        return await sccpValidationSchema.validate(castValues)
      }),
    )
  } catch (error) {
    console.log(error)
    console.error({
      value: error.value,
      errors: error.errors,
    })
    process.exit(1)
  }
})()
