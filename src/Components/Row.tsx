import React, { useState, useEffect } from 'react';
import Cell from './Cell'
import '../index.css'

interface RowProps {
  row: any,
  rowNumber: number
}

const Row: React.FC<RowProps> = ({ row, rowNumber }) => {

  return (
    <div className="row">{row.map((cell: number, id: number )=> <Cell cell={cell} key={`${rowNumber}${id}`}/>)}</div>
  )    
}

export default Row;