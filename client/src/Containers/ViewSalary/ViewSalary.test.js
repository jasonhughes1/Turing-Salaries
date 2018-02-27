import React from 'react';
import { shallow } from 'enzyme';
import { ViewSalary, mapStateToProps } from './ViewSalary';


describe('ViewSalary Tests', () => {

  it('should be defined', () => {
    const renderedViewSalary = shallow(<ViewSalary alumni= {[]}/>);

    expect(renderedViewSalary).toBeDefined();
  });

  it('should match the snap shot', () => {
    const renderedViewSalary = shallow(<ViewSalary alumni= {[]}/>);

    expect(renderedViewSalary).toMatchSnapshot();
  });
});
