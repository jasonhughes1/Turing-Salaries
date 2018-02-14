import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    
    return (
      <div className='nav-bar'>
    <h1 className='main-header'>Turing Salaries</h1>
    <NavLink className='nav' exact to='/'>Home</NavLink>
    <NavLink className='nav' to='/viewsalary'>ViewSalary</NavLink>
    <NavLink className='nav' to='/createsalary'>CreateSalary</NavLink>
  </div>
    )
  }
}

export default NavBar;
