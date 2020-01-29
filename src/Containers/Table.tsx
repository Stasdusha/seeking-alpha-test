import React, { useState } from 'react';
import Row from '../Components/Row'
import useInterval from '../hooks/useInterval'
import { createTable, nextTick } from '../helpers'

const Table: React.FC = () => {
  const [table, setTable] = useState(createTable);

  useInterval(() => setTable(nextTick(table)), 400)


  return (
    <div>
      {table.map((row, index) => <Row row={row} key={index} rowNumber={index} />)}
    </div>
  );
}

export default Table;