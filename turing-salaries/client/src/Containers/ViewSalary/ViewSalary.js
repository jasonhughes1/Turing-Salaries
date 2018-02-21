import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './ViewSalary.css';
import { connect } from 'react-redux';
import Card from '../../Components/Card/Card';


class ViewSalary extends Component {

  render() {
    return (
      <div className='view-salary-container'>
        <div className='link-container-view'>
        <NavLink className='nav' exact to='/'>Home</NavLink>
      </div>
        <h1 className='view-salary-title'>ViewSalary Lives Here</h1>
        <Card />
      </div>
    )
  }
}

export const mapStateToProps = (store) => {
  return {
    alumni: store.alumData
  };
};

export default connect(mapStateToProps, null)(ViewSalary);
