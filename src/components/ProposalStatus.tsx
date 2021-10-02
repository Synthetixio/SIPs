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
  const { data, error } = useSWR(
    `{
      proposal(id: "${id}") {
        state
      }
    }`,
    fetcher
  )
  const isLoading = !error && !data
  if (isLoading) return <>Loading status...</>
  if (error) return <>Error loading status</>
  return (
    <>
      {startCase(data.proposal.state)}
    </>
  )
}

export { ProposalStatus }
