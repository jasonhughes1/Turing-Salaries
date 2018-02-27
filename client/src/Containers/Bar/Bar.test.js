import React from 'react';
import { shallow } from 'enzyme';
import { Bar, mapStateToProps } from './Bar';


describe('Bar Tests', () => {

  it('should be defined', () => {
    const renderedBar = shallow(<Bar alumni= {[]}/>);

    expect(renderedBar).toBeDefined();
  });

  it('should match the snap shot', () => {
    const renderedBar = shallow(<Bar alumni= {[]}/>);

    expect(renderedBar).toMatchSnapshot();
  });

});
