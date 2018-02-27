import React from 'react';
import { shallow } from 'enzyme';
import { ViewLine, mapStateToProps } from './ViewLine';


describe('ViewLine Tests', () => {

  it('should be defined', () => {
    const renderedViewLine = shallow(<ViewLine alumni= {[]}/>);

    expect(renderedViewLine).toBeDefined();
  });

  it('should match the snap shot', () => {
    const renderedViewLine = shallow(<ViewLine alumni= {[]}/>);

    expect(renderedViewLine).toMatchSnapshot();
  });
});
