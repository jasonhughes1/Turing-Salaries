import React, { Component } from 'react';
import './NavBar.css';
import API from '../../helpers/API';
const { getData } = API;

class NavBar extends Component {

  async componentDidMount() {
    let alumniData = await getData()
    console.log(alumniData);
  }

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
