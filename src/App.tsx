import React from 'react';
import Table from './Containers/Table/Table';
import { createTable, nextTick } from './Services/tableService'

const App: React.FC = () => {
  return (
    <Table createTable={createTable} nextTick={nextTick}/>
  );
}

export default App;
