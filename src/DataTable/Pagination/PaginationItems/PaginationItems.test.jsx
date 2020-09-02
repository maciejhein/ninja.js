import React from 'react';
import { mount, shallow } from 'enzyme';

import PaginationItem from './PaginationItems';

describe('PaginationItem', () => {
  let props; 

  beforeEach(() => {
    props = {
      pageNumber: 0,
      isActive: false,
      onChange: jest.fn(),
    };
  });

  it('should renders correctly ', () => {
    const component = shallow(<PaginationItem {...props} />);

    expect(component).toMatchSnapshot();
  });

  it('should calls `onChange` function when button clicked', () => {
    const component = mount(<PaginationItem {...props} />);

    component.find('button').simulate('click');

    expect(props.onChange).toHaveBeenCalled(); 
  });

  it('should render button with class `button-outline` when page is active', () => {
    const newProps = {
      ...props,
      isActive: true
    }
    const component = mount(<PaginationItem {...newProps} />);

    expect(component.find('button').hasClass('button-outline')).toBe(true);
  });
});