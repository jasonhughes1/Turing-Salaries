import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './ViewSalary.css';
import { connect } from 'react-redux';
import Card from '../../Components/Card/Card';
import PropTypes from 'prop-types';


export class ViewSalary extends Component {
  constructor() {
    super();
    this.state = {
      string: ''
    };
    this.setState = this.setState.bind(this);
  }

  render() {
    if (!this.props.alumni.length) {
      return (
        <div>Loading</div>
      );
    } else {
      let cards = this.props.alumni[0].map(card => {
        return <Card
          key = {card.id}
          title = {card.title}
          paymentRate = {card.payment_rate}
          acceptedDate = {card.accepted_date}
          annualizedSalary = {card.annualized_salary}
          daysToOffer = {card.days_to_offer}
          finalCohort = {card.final_cohort}
          gradDate = {card.grad_date}
          id = {card.id}
          originalCohort = {card.original_cohort}
          originalStartDate = {card.original_start_date}
          paymentType = {card.payment_type}
        />;
      });
      return (
        <div className='view-salary-container'>
          <div className='link-container-view'>
            <NavLink className='nav' exact to='/'>Home</NavLink>
          </div>
          <h1 className='view-salary-title'>Alumni Salary Data</h1>
          <div className="view-salary-cards">
            {cards}
          </div>
        </div>
      );
    }
  }
}

export const mapStateToProps = (store) => {
  return {
    alumni: store.alumData
  };
};

export default connect(mapStateToProps, null)(ViewSalary);

ViewSalary.propTypes = {
  alumni: PropTypes.array
}
