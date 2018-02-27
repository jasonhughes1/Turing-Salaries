import React from 'react';
import { shallow } from 'enzyme';
import { ViewBar, mapStateToProps } from './ViewBar';


describe('ViewBar Tests', () => {

  it('should be defined', () => {
    const renderedViewBar = shallow(<ViewBar alumni= {[]}/>);

    expect(renderedViewBar).toBeDefined();
  });

  it('should match the snap shot', () => {
    const renderedViewBar = shallow(<ViewBar alumni= {[]}/>);

    expect(renderedViewBar).toMatchSnapshot();
  });
});
