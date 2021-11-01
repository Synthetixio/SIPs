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
  proposal: Yup.string().matches(snapshotIdRegex),
  status: Yup.string().oneOf(statuses),
  author: Yup.string().required(),
  created: Yup.date().nullable(),
  updated: Yup.date().nullable(),
  requires: Yup.mixed().nullable(),
})

const kipValidationSchema = commonValidationSchema
  .concat(
    Yup.object().shape({
      kip: Yup.number().required(),
    }),
  )
  .noUnknown()
  .strict()

const ckipValidationSchema = commonValidationSchema
  .concat(
    Yup.object().shape({
      ckip: Yup.number().required(),
    }),
  )
  .noUnknown()
  .strict()

const ktrValidationSchema = commonValidationSchema
  .concat(
    Yup.object().shape({
      ktr: Yup.number().required(),
    }),
  )
  .noUnknown()
  .strict()

;(async () => {
  try {
    const kips = await g('./content/kips/*.md')
    const ckips = await g('./content/ckip/*.md')
    const ktrs = await g('./content/ktrs/*.md')

    // KIP
    await Promise.all(
      kips.map(async (file) => {
        const content = await fs.readFile(file, 'utf-8')
        const { attributes } = fm(content)
        const castValues = kipValidationSchema.cast({ file, ...attributes })
        return await kipValidationSchema.validate(castValues)
      }),
    )
    // CKIP
    await Promise.all(
      ckips.map(async (file) => {
        const content = await fs.readFile(file, 'utf-8')
        const { attributes } = fm(content)
        const castValues = ckipValidationSchema.cast({ file, ...attributes })
        return await ckipValidationSchema.validate(castValues)
      }),
    )
    // KTR
    await Promise.all(
      ktrs.map(async (file) => {
        const content = await fs.readFile(file, 'utf-8')
        const { attributes } = fm(content)
        const castValues = ktrValidationSchema.cast({ file, ...attributes })
        return await ktrValidationSchema.validate(castValues)
      }),
    )
  } catch (error) {
    console.error({
      value: error.value,
      errors: error.errors,
    })
    process.exit(1)
  }
})()
