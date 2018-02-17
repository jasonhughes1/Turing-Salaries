import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {

    return (
      <div className='nav-bar'>
        <img className="logo" src={require('../../assets/turing.png')} alt="logo" />
        <h1 className='main-header'>Turing Salaries</h1>
      </div>
    )
  }
}

export default NavBar;
