import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Bar from '../Bar/Bar';
import './ViewBar.css';

class ViewBar extends Component {

  render() {
    return (
      <div className='view-bar-container'>
        <div className='link-container-view'>
        <NavLink className='nav' exact to='/'>Home</NavLink>
      </div>
        <h2 className='view-salary-title'>How long does it take graduates to find jobs?</h2>
          <Bar />
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

export default connect(mapStateToProps, null)(ViewBar);
