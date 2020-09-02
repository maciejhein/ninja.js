import React from 'react';
import DataTable from './DataTable';
import './App.css';

const App = () => {
  //TODO in most of cases data comes from API we should use hook to fetch data
  const rows = JSON.parse(document.getElementById('user-data').dataset.users);

  return (
    <div className="container mt-3">
      <DataTable rows={rows} rowsPerPage={5} />
    </div>
  );
};

export default App;
