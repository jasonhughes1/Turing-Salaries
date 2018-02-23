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
            <NavLink className='home-nav' to='/viewsalary'>View Salaries</NavLink>
            <NavLink className='charts-nav' to='/viewline'>View Line Chart</NavLink>
            <NavLink className='charts-nav' to='/viewPie'>View Pie Chart</NavLink>
            <NavLink className='charts-nav' to='/viewBar'>View Bar Graph</NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
