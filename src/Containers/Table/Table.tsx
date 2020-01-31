import React, { useState } from 'react';
import Row from '../../Components/Row'
import useInterval from '../../hooks/useInterval'

interface TableProps {
  createTable: () => number[][],
  nextTick: (table: number[][]) => number[][]
}

const Table: React.FC<TableProps> = ({ createTable, nextTick}) => {
  const [table, setTable] = useState(createTable);

  useInterval(() => setTable(nextTick(table)), 400)


  return (
    <div>
      {table.map((row: number[], index: number) => <Row row={row} key={index} rowNumber={index} />)}
    </div>
  );
}

export default Table;