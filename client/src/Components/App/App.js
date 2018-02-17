import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';
import ViewSalary from '../ViewSalary/ViewSalary';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={NavBar} key='NavBar'/>
        <Route exact path='/' component={Home} key='Home' />
        <Route exact path='/viewsalary' component={ViewSalary} key='ViewSalary' />
      </div>
      
    );
  }
}

export default App;
