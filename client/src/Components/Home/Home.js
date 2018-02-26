import React, { Component } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <div className='link-container'>
          <span className="description">
            Welcome to Turing Salaries where you can view data from past Turing graduates.
          </span>
          <div className="button-area">
            <NavLink className='home-nav' to='/viewsalary'>Browse Salaries</NavLink>
            <NavLink className='charts-nav' to='/viewline'>2015 & 2016 Salaries</NavLink>
            <NavLink className='charts-nav' to='/viewPie'>Jobs Titles of Grads</NavLink>
            <NavLink className='charts-nav' to='/viewBar'>How many days to hire?</NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
