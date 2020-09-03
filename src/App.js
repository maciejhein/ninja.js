import React from 'react';
import PropTypes from 'prop-types';

import { row } from './types';
import DataTable from './DataTable';
import './App.css';

const App = ({ rows }) => {
  return (
    <div className="container mt-3">
      <DataTable rows={rows} rowsPerPage={5} />
    </div>
  );
};

App.propTypes = {
  rows: PropTypes.arrayOf(row).isRequired,
};

export default App;
