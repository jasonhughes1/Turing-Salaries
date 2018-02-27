import React from 'react';
import { shallow } from 'enzyme';
import { NavBar, mapStateToProps, mapDispatchToProps } from './NavBar';

describe('NavBar Tests', () => {

  it.skip('should be defined', () => {
    const mockData = [];
    const renderedNavBar = shallow(<NavBar alumni={mockData} />);
    expect(renderedNavBar).toBeDefined()
  });

  it.only('should match snap shot', () => {
    const mockData = [];
    const renderedNavBar = shallow(<NavBar alumni={mockData} />);

    expect(renderedNavBar).toMatchSnapshot();
  })
})

describe('Map State To Props Test', () => {
  it.skip('should alumni data from the store', () => {
    const mockStore = {
      alumni: {
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
      }
    }
    const expected = mapStateToProps(mockStore);
    expect(expected.alumni).toEqual(mockStore.alumni)
  })
})
