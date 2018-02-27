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

describe('Map State To Props Test', () => {
  it('should get alumni data from the store', () => {
    const mockStore = {
      alumnData: [
        {
      "original_cohort": 1502,
      "original_start_date": "2/9/2015",
      "final_cohort": 1507,
      "grad_date": "1/22/2016",
      "accepted_date": "1/22/2016",
      "days_to_offer": 0,
      "payment_type": "Annual",
      "payment_rate": 100000.00,
      "annualized_salary": 100000.00,
      "title": "Research Associate"
    }]
    }
    const expected = mapStateToProps(mockStore);
    expect(expected.alumni).toEqual(mockStore.alumni)
  });
});
