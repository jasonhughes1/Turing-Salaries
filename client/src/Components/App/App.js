import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import NavBar from '../../Containers/NavBar/NavBar';
import Home from '../Home/Home';
import ViewSalary from '../../Containers/ViewSalary/ViewSalary';
import ViewLine from '../../Containers/ViewLine/ViewLine';
import ViewBar from '../../Containers/ViewBar/ViewBar';
import ViewPie from '../../Containers/ViewPie/ViewPie'

class App extends Component {


  render() {
    return (
      <div className="App">
        <Route path='/' component={NavBar} key='NavBar'/>
        <Route exact path='/' component={Home} key='Home' />
        <Route exact path='/viewsalary' component={ViewSalary} key='ViewSalary' />
        <Route exact path='/viewline' component={ViewLine} key='ViewLine' />
        <Route exact path='/viewbar' component={ViewBar} key='ViewBar' />
        <Route exact path='/viewpie' component={ViewPie} key='ViewPie' />
      </div>
    );
  }
}

export default App;
