import React from 'react';
import { shallow } from 'enzyme';
import { LineGraph15, mapStateToProps } from './LineGraph15';


describe('LineGraph15 Tests', () => {

  it('should be defined', () => {
    const renderedLineGraph15 = shallow(<LineGraph15 alumni= {[]}/>);

    expect(renderedLineGraph15).toBeDefined();
  });

  it('should match the snap shot', () => {
    const renderedLineGraph15 = shallow(<LineGraph15 alumni= {[]}/>);

    expect(renderedLineGraph15).toMatchSnapshot();
  });
});
