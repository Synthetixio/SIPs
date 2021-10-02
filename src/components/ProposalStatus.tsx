import React from 'react'
import startCase from 'lodash/startCase'
import { request } from 'graphql-request'
import useSWR from 'swr'

const fetcher = (query: string) => request('https://hub.snapshot.org/graphql', query)

const snapshotIdRegex = /^https?:\/\/(snapshot.org).*\/([A-z0-9]{7,})$/

const ProposalStatus: React.FC<{ url: string }> = ({ url }) => {
  const matches = snapshotIdRegex.exec(url)
  let id = null
  if (matches && matches[2]) {
    id = matches[2]
  }
  const { data } = useSWR(
    `{
      proposal(id: "${id}") {
        state
      }
      votes (
        first: 1000
        skip: 0
        where: {
          proposal: "${id}"
        }
        orderBy: "created",
        orderDirection: desc
      ) {
        id
        choice
      }
    }`,
    fetcher
  )
  const isLoading = !data
  if (isLoading) return <>Loading status...</>
  if (!data?.proposal?.state) return <>Error loading status</>
  return (
    <a href={url} target="_blank" rel="noreferrer noopener">
      {startCase(data.proposal.state)}
      {' '}&ndash;{' '}
      {data.votes.length} vote(s)
    </a>
  )
}

export { ProposalStatus }
