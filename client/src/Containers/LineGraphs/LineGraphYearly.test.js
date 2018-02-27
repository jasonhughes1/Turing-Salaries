import React from 'react';
import { shallow } from 'enzyme';
import { LineGraphYearly, mapStateToProps } from './LineGraphYearly';


describe('LineGraphYearly Tests', () => {

  it('should be defined', () => {
    const renderedYearly = shallow(<LineGraphYearly alumni= {[]}/>);

    expect(renderedYearly).toBeDefined();
  });

  it('should match the snap shot', () => {
    const renderedYearly = shallow(<LineGraphYearly alumni= {[]}/>);

    expect(renderedYearly).toMatchSnapshot();
  });
});
