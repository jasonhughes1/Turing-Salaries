import React, { Component } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <div className='link-container'>
          <span className="description">
            Welcome to Turing Salaries where you can view data from past Turing graduates, or input your salary information from your first job out of Turing.
          </span>
          <NavLink className='home-nav' to='/viewsalary'>ViewSalary</NavLink>
          <NavLink className='home-nav' to='/createsalary'>CreateSalary</NavLink>
        </div>
      </div>
    )
  }
}

export default Home;
