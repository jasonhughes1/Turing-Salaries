import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './ViewSalary.css';


class ViewSalary extends Component {

  render() {
    return (
      <div className='view-salary-container'>
        <div className='link-container-view'>
        <NavLink className='nav' exact to='/'>Home</NavLink>
      </div>
        <h1 className='view-salary-title'>ViewSalary Lives Here</h1>
      </div>
    )
  }
}

export default ViewSalary;
