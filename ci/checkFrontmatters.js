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
    .oneOf(['Ethereum', 'Optimism', 'Ethereum & Optimism','Base','Ethereum, Optimism & Base'])
    .required(),
  implementor: Yup.string().nullable(),
  release: Yup.string().nullable(),
  created: Yup.date().nullable(),
  updated: Yup.date().nullable(),
  requires: Yup.mixed().nullable(),
  'discussions-to': Yup.string().nullable(),
})

const xipValidationSchema = commonValidationSchema
  .concat(
    Yup.object().shape({
      /*
        xip: <to be assigned>
        title: <XIP title>
        author: <a list of the author's or authors' name(s) and/or username(s), or name(s) and email(s), e.g. (use with the parentheses or triangular brackets): FirstName LastName (@GitHubUsername), FirstName LastName <foo@bar.com>, FirstName (@GitHubUsername) and GitHubUsername (@GitHubUsername)>
        discussions-to: <Create a new thread on https://research.infinex.io and drop the link here>
        status: <Draft>
        created: <date created on, in ISO 8601 (yyyy-mm-dd) format>
        updated: <date created on, in ISO 8601 (yyyy-mm-dd) format>
        requires: <XIP number(s)> (*optional)
        resolution: <a url pointing to the resolutioon of this XIP>
        type: <Meta-Governance | Governance>
        parameter-changes: <a list of the parameter changes that are being proposed, or “None” if no protocol parameters are being changed in the specification>
        network: <Ethereum | Optimism | Base | Ethereum & Optimism | Ethereum, Optimism & Base>

        implementor: <a list of the author's or authors' name(s) and/or username(s), or name(s) and email(s), e.g. (use with the parentheses or triangular brackets): FirstName LastName (@GitHubUsername), FirstName LastName <foo@bar.com>, FirstName (@GitHubUsername) and GitHubUsername (@GitHubUsername)>
        release: (Release Name)
        proposal: <snapshot.org proposal link> (*optional)

        implementation-date: <date created on, in ISO 8601 (yyyy-mm-dd) format>
      */  
      xip: Yup.number().required(),
      network: Yup.string().required(),
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
