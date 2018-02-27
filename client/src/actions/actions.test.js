import * as actions from './actions';

describe('Actions', () => {

  it('has a type of fetch data success', () => {
    const data = {
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
    };
    const expected = {
      type: 'DATA_SUCCESS',
      data
    };
    expect(actions.fetchDataSuccess(data)).toEqual(expected);
  });
});
