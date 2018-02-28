import React from 'react';
import './Card.css';
import moment from 'moment';
import PropTypes from 'prop-types';


const Card = (props) => {
  const formatted =
  moment(props.acceptedDate.slice(0, -14)).format('MMM. d, YYYY')
  const formattedGrad =
  moment(props.gradDate.slice(0, -14)).format('MMM. d, YYYY')
  const formattedCohort =
  moment(props.originalStartDate.slice(0, -14)).format('MMM. d, YYYY')
  return (
    <div className='card'>
      <p><span className="card-titles">Job Title:</span>
        {props.title}</p>
      <p><span className="card-titles">Salary:</span>
      ${props.paymentRate}</p>
      <p><span className="card-titles">Annualized Salary:</span>
        ${props.annualizedSalary}</p>
      <p><span className="card-titles">Payment Type:</span>
        {props.paymentType}</p>
      <p><span className="card-titles">Offer Accepted:</span>
        {formatted}</p>
      <p><span className="card-titles">Days to Offer:</span>
        {props.daysToOffer}</p>
      <p><span className="card-titles">Graduation Date:</span>
        {formattedGrad}</p>
      <p><span className="card-titles">Original Cohort:</span>
        {props.originalCohort}</p>
      <p><span className="card-titles">Final Cohort:</span>
        {props.finalCohort}</p>
      <p><span className="card-titles">Turing Start Date:</span>
        {formattedCohort}</p>
    </div>
  );
};

export default Card;

Card.PropTypes = {
  title: PropTypes.string,
  paymentRate: PropTypes.string,
  acceptedDate: PropTypes.string,
  gradDate: PropTypes.string,
  originalStartDate: PropTypes.string,
  annualizedSalary: PropTypes.string,
  paymentType: PropTypes.string,
  daysToOffer: PropTypes.string,
  originalCohort: PropTypes.string,
  finalCohort: PropTypes.string,
  
}
