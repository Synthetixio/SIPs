import { flow, takeRight, join, split } from 'lodash/fp'

export const getGithubLink = (fileAbsolutePath: string): string => {
  const relativePath = flow(
    split('/'),
    takeRight(3),
    join('/'),
  )(fileAbsolutePath)
  return `https://github.com/Synthetixio/SIPs/blob/master/${relativePath}`
}
