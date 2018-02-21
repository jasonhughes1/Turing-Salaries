import React from 'react';
import './Card.css';


const Card = (props) => {
  console.log(props);
  return (
    <div className='card'>
      <p>{props.title}</p>
      <p>{props.paymentRate}</p>
      <p>{props.annualizedSalary}</p>
      <p>{props.acceptedDate}</p>
      <p>{props.daysToOffer}</p>
      <p>{props.gradDate}</p>
      <p>{props.originalCohort}</p>
      <p>{props.finalCohort}</p>
      <p>{props.originalStartDate}</p>
    </div>
  )
}



export default Card;
