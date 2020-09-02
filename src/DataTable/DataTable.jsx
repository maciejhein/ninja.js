import React, { useState, useMemo } from 'react'

import Pagination from './Pagination'
import Row from './Row'
import Search from './Search'

const isContainText = (text, queryText) => {
  return text.toLowerCase().includes(queryText.toLowerCase());
} 

const DataTable = ({ rows, rowsPerPage = 40}) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [queryText, setQueryText] = useState('');

  const searchedRows = useMemo(() => 
    rows.filter((row) => isContainText(row.name1, queryText) || isContainText(row.email, queryText)), [rows, queryText]);

  const totalNumberOfPages = rowsPerPage === 0 ? 0 : Math.ceil(searchedRows.length / rowsPerPage);

  const startIndex = currentPageNumber * rowsPerPage;
  const rowsToRender = searchedRows.slice(startIndex, startIndex + rowsPerPage).map(row => <Row key={row.per_id} row={row} />);
  
  const onSearch = ({ target }) => {
    setQueryText(target.value);

    setCurrentPageNumber(0);
  };

  return <div>
    <Search onChange={onSearch} />
    <table>
      <tbody>
        { rowsToRender }
      </tbody>
    </table>
    <Pagination
      currentPageNumber={currentPageNumber}
      totalNumberOfPages={totalNumberOfPages}
      onChange={setCurrentPageNumber} />
  </div>
}

export default DataTable
