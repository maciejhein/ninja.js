import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ onChange }) => {
  return (
    <div className="p-b-1">
      <input type="search" className="form-control" placeholder="Søg brugere" onChange={onChange} />
    </div>
  );
};

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Search;
