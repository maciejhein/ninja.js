import React from 'react';

import { row } from '../../types';

const Row = ({ row }) => {
  return (
    <tr>
      <td>
        <a href={row.edit_path}>{row.name1}</a>
        <br />
        <small>{row.email}</small>
      </td>
    </tr>
  );
};

Row.propTypes = {
  row: row.isRequired,
};

export default Row;
