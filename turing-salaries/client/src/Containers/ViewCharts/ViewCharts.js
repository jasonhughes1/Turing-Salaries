import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import MyStockChart from '../highcharts/highcharts';
import PieChart from '../../Components/PieChart/PieChart';

class ViewCharts extends Component {

  render() {
    return (
      <div className='view-salary-container'>
        <div className='link-container-view'>
        <NavLink className='nav' exact to='/'>Home</NavLink>
      </div>
        <h1 className='view-salary-title'>Charts Lives Here</h1>
          <MyStockChart />
          <PieChart />
      </div>
    )
  }
}

export const mapStateToProps = (store) => {
  return {
    alumni: store.alumData
  };
};

export default connect(mapStateToProps, null)(ViewCharts);
