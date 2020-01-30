import React from 'react';
import './cell.css'
import { ALIVE } from '../../Services/tableService'

interface CellProps {
  cell: number
}

const Cell: React.FC<CellProps> = ({ cell }) => {

  const isAlive = cell === ALIVE
  return (
    <div className={`cell ${isAlive && 'cell-alive'}`} />
  );
}

export default React.memo(Cell);