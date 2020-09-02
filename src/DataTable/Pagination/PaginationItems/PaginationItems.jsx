import React from 'react';

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

export default PaginationItem;
