import React from 'react';
import { shallow } from 'enzyme';
import { ViewPie, mapStateToProps } from './ViewPie';


describe('ViewPie Tests', () => {

  it('should be defined', () => {
    const renderedViewPie = shallow(<ViewPie alumni= {[]}/>);

    expect(renderedViewPie).toBeDefined();
  });

  it('should match the snap shot', () => {
    const renderedViewPie = shallow(<ViewPie alumni= {[]}/>);

    expect(renderedViewPie).toMatchSnapshot();
  });
  
});
