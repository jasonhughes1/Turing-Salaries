import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Pie from '../Pie/Pie';
import './ViewPie.css';

export class ViewPie extends Component {

  render() {
    return (
      <div className='view-pie-container'>
        <div className='link-container-view'>
        <NavLink className='nav' exact to='/'>Home</NavLink>
      </div>
        <h2 className='view-salary-title'>Turing grads have been accepting offers with these job titles</h2>
          <Pie />
          <div className='place-holder'></div>
      </div>
    )
  }
}

export const mapStateToProps = (store) => {
  return {
    alumni: store.alumData
  };
};

export default connect(mapStateToProps, null)(ViewPie);
