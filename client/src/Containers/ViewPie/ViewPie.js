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
        <h2 className='view-salary-title'>Turing grads have been accepting offers with these job titles</h2>
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
