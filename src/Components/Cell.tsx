import React from 'react';
import '../index.css'
import { ALIVE } from '../helpers'

interface CellProps {
  cell: number
}

const Cell: React.SFC<CellProps> = ({ cell }) => {

  const isAlive = cell === ALIVE
  return (
    <div className={`cell ${isAlive && 'cell-alive'}`} />
  );
}

export default Cell;