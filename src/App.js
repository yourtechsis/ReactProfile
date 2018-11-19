import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/Content'
import NavBar from './components/NavBar'
import Header from './components/Header'
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route'
import Portfolio from './components/Portfolio';


class App extends Component {
  render() {
    return (

      <div className="App">
        
        <NavBar />
        <Content/>



      </div>


    );
  }
}

export default App;
