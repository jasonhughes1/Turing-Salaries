import React from 'react';
import './Card.css';


const Card = (props) => {
  return (
    <div className='card'>
      <p>Job Title: {props.title}</p>
      <p>Salary: ${props.paymentRate}</p>
      <p>Annualized Salary: {props.annualizedSalary}</p>
      <p>Payment Type: {props.paymentType}</p>
      <p>Offer Accepted: {props.acceptedDate}</p>
      <p>Days to Offer: {props.daysToOffer}</p>
      <p>Graduation Date: {props.gradDate}</p>
      <p>Original Cohort: {props.originalCohort}</p>
      <p>Final Cohort: {props.finalCohort}</p>
      <p>Turing Start Date: {props.originalStartDate}</p>
    </div>
  )
}



export default Card;
