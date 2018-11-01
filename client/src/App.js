import React, { Component } from 'react';
import LandingPage from './components/layout/LandingPage';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar/>
      <LandingPage/>
      <Footer/>
      </div>
    );
  }
}

export default App;
