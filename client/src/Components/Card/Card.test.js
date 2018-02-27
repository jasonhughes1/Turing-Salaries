import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card Tests', () => {

  it('should be defined', () => {
    const renderedCard = shallow(<Card title= {'title'}
      paymentRate= {'paymentRate'}
      paymentType= {'paymentType'}
      finalCohort= {'finalCohort'}
      annualizedSalary= {'annualizedSalary'}
      daysToOffer= {'daysToOffer'}
      originalCohort= {'originalCohort'}
      acceptedDate = {'acceptedDate'}
      gradDate = {'gradDate'}
      originalStartDate = {'originalStartDate'}
    />);

    expect(renderedCard).toBeDefined();
  });

  it('should match snap shot', () => {
    const renderedCard = shallow(<Card title= {'title'}
      paymentRate= {'paymentRate'}
      paymentType= {'paymentType'}
      finalCohort= {'finalCohort'}
      annualizedSalary= {'annualizedSalary'}
      daysToOffer= {'daysToOffer'}
      originalCohort= {'originalCohort'}
      acceptedDate = {'acceptedDate'}
      gradDate = {'gradDate'}
      originalStartDate = {'originalStartDate'}
    />);

    expect(renderedCard).toMatchSnapshot();
  });
});
