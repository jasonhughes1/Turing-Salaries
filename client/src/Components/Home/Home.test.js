import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home Tests', () => {

  it.only('should be defined', () => {
    const renderedHome = shallow(<Home />);

    expect(renderedHome).toBeDefined();
  });

  it.only('should match the snap shot', () => {
    const renderedHome = shallow(<Home />);

    expect(renderedHome).toMatchSnapshot();
  });

});
