import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './ViewSalary.css';

class ViewSalary extends Component {
  render() {
    return (
      <div className='view-salary-container'>
        <div className='link-container'>
        <NavLink className='nav' exact to='/'>Home</NavLink>
        <NavLink className='nav' to='/createsalary'>CreateSalary</NavLink>
      </div>
        <h1>ViewSalary Lives Here</h1>
      </div>
    )
  }
}

export default ViewSalary;
