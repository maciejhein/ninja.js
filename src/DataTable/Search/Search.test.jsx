import React from 'react';
import { shallow } from 'enzyme';

import Search from './Search';

describe('Search', () => {
  it('should renders correctly', () => {
    const component = shallow(<Search onChange={jest.fn()} />);

    expect(component).toMatchSnapshot();
  });
});