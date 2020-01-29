import React, { useState, useEffect } from 'react';
import Cell from './Cell'
import '../index.css'

interface RowProps {
  row: any
}

const Row: React.SFC<RowProps> = ({ row }) => {

  return (
    <div className="row">{row.map((cell: number )=> <Cell cell={cell}/>)}</div>
  )    
}

export default Row;