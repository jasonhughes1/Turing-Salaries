import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './CreateSalary.css';

class CreateSalary extends Component {
  render() {
    return (
      <div className='create-salary-container'>
        <div className='link-container-create'>
        <NavLink className='nav' exact to='/'>Home</NavLink>
        <NavLink className='nav' to='/viewsalary'>ViewSalary</NavLink>
      </div>
        <h1>CreateSalary Lives Here</h1>
      </div>
    )
  }
}

export default CreateSalary;
