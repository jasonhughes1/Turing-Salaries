import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Home from '../Home/Home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={NavBar} key='NavBar'/>
        <Route exact path='/' component={Home} key='Home'/>
      </div>
    );
  }
}

export default App;
