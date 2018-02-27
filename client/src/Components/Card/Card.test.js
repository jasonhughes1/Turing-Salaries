import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card Tests', () => {

  it.skip('should be defined', () => {
    const renderedCard = shallow(<Card />);

    expect(renderedCard).toBeDefined();
  });

  it.skip('should match snap shot', () => {
    const renderedCard = shallow(<Card />);

    expect(renderedCard).toMatchSnapshot();
  })
})
