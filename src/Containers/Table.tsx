import React, { useState, useEffect } from 'react';
import Row from '../Components/Row'
import { createTable, nextTick } from '../helpers'

const Table: React.FC = () => {
  const [table, setTable] = useState(createTable);

  useEffect(() => {
    const timeout = setTimeout(() => setTable(nextTick(table)), 400)
    return () => {
      clearTimeout(timeout)
    };
  });


  return (
    <div>
      {table.map(row => <Row row={row} />)}
    </div>
  );
}

export default Table;