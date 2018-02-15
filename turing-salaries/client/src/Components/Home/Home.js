import React, { Component } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <div className='link-container'>
        <NavLink className='nav' to='/viewsalary'>ViewSalary</NavLink>
        <NavLink className='nav' to='/createsalary'>CreateSalary</NavLink>
      </div>
        <h1>HOME PAGE</h1>
      </div>
    )
  }
}

export default Home;
