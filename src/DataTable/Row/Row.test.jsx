import React from 'react';
import { shallow } from 'enzyme';

import { rows } from '../../__mocks__';
import Row from './Row';

describe('Row', () => {
  it('should renders correctly', () => {
    const component = shallow(<Row row={rows[0]} />);

    expect(component).toMatchSnapshot();
  });
});