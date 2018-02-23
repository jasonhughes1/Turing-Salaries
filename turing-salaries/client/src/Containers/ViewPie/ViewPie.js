import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Pie from '../Pie/Pie';

class ViewPie extends Component {

  render() {
    return (
      <div className='view-salary-container'>
        <div className='link-container-view'>
        <NavLink className='nav' exact to='/'>Home</NavLink>
      </div>
        <h1 className='view-salary-title'>Salary and Job Comparisons</h1>
          <Pie />
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
