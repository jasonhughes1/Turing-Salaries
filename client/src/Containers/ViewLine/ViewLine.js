import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import LineGraph15 from '../LineGraphs/LineGraph15';
import LineGraph16 from '../LineGraphs/LineGraph16';
import LineGraphYearly from '../LineGraphs/LineGraphYearly'
import './ViewLine.css';


class ViewLine extends Component {

  render() {
    return (
      <div className='view-line-container'>
        <div className='link-container-view'>
        <NavLink className='nav' exact to='/'>Home</NavLink>
      </div>
        <h2 className='view-salary-title'>View salary information for cohorts from 2015 and 2016</h2>
          <LineGraph15 alumData={this.props.alumni}/>
          <div class="place-holder"></div>
          <LineGraph16 alumData={this.props.alumni}/>
          <LineGraphYearly alumData={this.props.alumni} />
          <div class="place-holder"></div>
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
