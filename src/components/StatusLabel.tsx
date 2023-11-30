import React from 'react';
import { flow, split, join } from 'lodash/fp';

interface Props {
  label?: string | null;
}

const StatusLabel = ({ label }: Props) => (
  <h2>{flow(split('_'), join(' '))(label)}</h2>
);

export { StatusLabel };
