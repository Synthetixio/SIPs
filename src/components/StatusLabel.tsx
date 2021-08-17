import React from 'react'
import { flow, split, join } from 'lodash/fp'

interface Props {
  label: string
}

const StatusLabel: React.FC<Props> = ({ label }) => (
  <h2>{flow(split('_'), join(' '))(label)}</h2>
)

export { StatusLabel }
