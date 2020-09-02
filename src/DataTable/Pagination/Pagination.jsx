import React from 'react'

import PaginationItems from './PaginationItems'

const Pagination = ({ currentPageNumber, totalNumberOfPages, onChange }) => {
  if(totalNumberOfPages <= 1){
    return null;
  }

  const pages =Array.from(Array(totalNumberOfPages).keys());

  return(
    <ul className="pagination">
      {
        pages.map(pageNumber => {
          return <PaginationItems
            key={pageNumber}
            isActive={currentPageNumber === pageNumber}
            currentPageNumber={currentPageNumber}
            pageNumber={pageNumber}
            onChange={onChange} />
        })
      }
    </ul>
  )
}

export default Pagination
