import React from 'react';
import { mount, shallow } from 'enzyme';

import Pagination from './Pagination';

jest.mock('./PaginationItems', () => () => 'PaginationItems');

describe('Pagination', () => {
  let props; 

  beforeEach(() => {
    props = {
      currentPageNumber: 1,
      totalNumberOfPages: 3,
      onChange: jest.fn()
    };
  });

  it('should renders correctly', () => {
    const component = shallow(<Pagination {...props}  />);

    expect(component).toMatchSnapshot();
  });

  it('should returns empty object when `totalNumberOfPages` is less than one', () => {
    const newProps = {
      ...props,
      totalNumberOfPages: 0
    }

    const component = mount(<Pagination {...newProps} />);

    expect(component).toEqual({}); 
  });
});