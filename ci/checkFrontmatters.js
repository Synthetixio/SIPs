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
  type: Yup.string().oneOf(['meta-governance', 'core-upgrade','parameter-change', "integration-upgrade"]).required(),
  proposal: Yup.string().matches(snapshotIdRegex),// check that this is optional
  status: Yup.string().oneOf(statuses),
  author: Yup.string().required(),
  network: Yup.string()
    .oneOf(['Ethereum', 'Optimism', 'Ethereum & Optimism','Base','Ethereum, Optimism & Base'])
    .required(),
  implementor: Yup.string().nullable(),
  created: Yup.date().required(),
  updated: Yup.date().required(),
  requires: Yup.mixed().nullable(),
  'discussions-to': Yup.string().nullable(),
  resolution: Yup.string().nullable(),
  'parameter-changes': Yup.string().nullable(),
  'implementation-date': Yup.date().nullable(),
})

// Specific validation for Xip, can extend to other types
const xipValidationSchema = commonValidationSchema
  .concat(
    Yup.object().shape({
      xip: Yup.number().required(),
    }),
  )
  .noUnknown()
  .strict()


;(async () => {
  try {
    const xips = await g('./content/xips/*.md')

    // XIP
    await Promise.all(
      xips.map(async (file) => {
        const content = await fs.readFile(file, 'utf-8')
        const { attributes } = fm(content)
        const castValues = xipValidationSchema.cast({ file, ...attributes })
        return await xipValidationSchema.validate(castValues)
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
