import React, { Component } from 'react';
import './NavBar.css';
import { getData } from '../../helpers/API';
import { connect } from 'react-redux';
import { getAllData } from '../../actions/actions';

export class NavBar extends Component {

  componentDidMount() {
    this.props.salaries();
  }

  render() {
    return (
      <div className='nav-bar'>
        <h1 className='main-header'>Movement <img className="logo" src={require('../../assets/movementacademy.jpg')} alt="logo" />Academy</h1>
      </div>
    );
  }
}

export const mapStateToProps = (store) => {
  return {
    alumni: store.alumData
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    salaries: (newData) => {
      dispatch(getAllData(newData));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
