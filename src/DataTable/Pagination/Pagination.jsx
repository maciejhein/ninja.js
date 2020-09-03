import React from 'react';
import PropTypes from 'prop-types';

import PaginationItems from './PaginationItems';

const Pagination = ({ currentPageNumber, totalNumberOfPages, onChange }) => {
  if (totalNumberOfPages <= 1) {
    return null;
  }

  const pages = Array.from(Array(totalNumberOfPages).keys());

  return (
    <ul className="pagination">
      {pages.map((pageNumber) => {
        return (
          <PaginationItems
            key={pageNumber}
            isActive={currentPageNumber === pageNumber}
            currentPageNumber={currentPageNumber}
            pageNumber={pageNumber}
            onChange={onChange}
          />
        );
      })}
    </ul>
  );
};

Pagination.propTypes = {
  currentPageNumber: PropTypes.number.isRequired,
  totalNumberOfPages: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Pagination;
