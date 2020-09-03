import React from 'react';
import { mount } from 'enzyme';

import { rows } from '../__mocks__';
import DataTable from './DataTable';

jest.mock('./Pagination', () => () => 'Pagination');

describe('DataTable', () => {
  it('should find and render searched user', () => {
    const component = mount(<DataTable rows={rows} />);

    component.find('input').simulate('change', { target: { value: 'AlfredKKrogh@armyspy.com' } });

    expect(component.find('tbody').children()).toHaveLength(1);
  });
});
