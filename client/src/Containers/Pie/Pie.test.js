import React from 'react';
import { shallow } from 'enzyme';
import { Pie, mapStateToProps } from './Pie';


describe('Pie Tests', () => {

  it('should be defined', () => {
    const renderedPie = shallow(<Pie alumni= {[]}/>);

    expect(renderedPie).toBeDefined();
  });

  it('should match the snap shot', () => {
    const renderedPie = shallow(<Pie alumni= {[]}/>);

    expect(renderedPie).toMatchSnapshot();
  });
});
