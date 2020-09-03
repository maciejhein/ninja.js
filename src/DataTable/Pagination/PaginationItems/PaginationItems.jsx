import React from 'react';
import PropTypes from 'prop-types';

const PaginationItem = ({ pageNumber, isActive, onChange }) => {
  const classIsActive = isActive ? 'button-outline' : '';

  const onClick = (event) => {
    event.preventDefault();

    onChange(pageNumber);
  };

  return (
    <li className="page-item mr-1">
      <button className={`page-link ${classIsActive}`} onClick={onClick}>
        {pageNumber + 1}
      </button>
    </li>
  );
};

PaginationItem.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default PaginationItem;
