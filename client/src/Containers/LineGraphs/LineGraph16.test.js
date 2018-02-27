import React from 'react';
import { shallow } from 'enzyme';
import { LineGraph16, mapStateToProps } from './LineGraph16';


describe('LineGraph16 Tests', () => {

  it('should be defined', () => {
    const renderedLineGraph16 = shallow(<LineGraph16 alumni= {[]}/>);

    expect(renderedLineGraph16).toBeDefined();
  });

  it('should match the snap shot', () => {
    const renderedLineGraph16 = shallow(<LineGraph16 alumni= {[]}/>);

    expect(renderedLineGraph16).toMatchSnapshot();
  });
});
