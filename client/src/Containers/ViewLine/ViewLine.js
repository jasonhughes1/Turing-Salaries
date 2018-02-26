import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import LineGraph15 from '../LineGraphs/LineGraph15';
import LineGraph16 from '../LineGraphs/LineGraph16';

class ViewLine extends Component {

  render() {
    return (
      <div className='view-salary-container'>
        <div className='link-container-view'>
        <NavLink className='nav' exact to='/'>Home</NavLink>
      </div>
        <h1 className='view-salary-title'>Salary and Job Comparisons</h1>
          <LineGraph15 alumData={this.props.alumni}/>
          <LineGraph16 alumData={this.props.alumni}/>
      </div>
    )
  }
}

export const mapStateToProps = (store) => {
  return {
    alumni: store.alumData
  };
};

export default connect(mapStateToProps, null)(ViewLine);
