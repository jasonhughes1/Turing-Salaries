import React from 'react';
import { shallow } from 'enzyme';
import { ViewSalary, mapStateToProps } from './ViewSalary';

describe('View Salary Tests', () => {

  it.skip('should be defined', () => {
    const renderedViewSalary = shallow(<ViewSalary />);
    expect(renderedViewSalary).toBeDefined();
  })
})
