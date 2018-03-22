import React, { Component } from 'react';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return <div className="app">
        <Header />
        <Home />
        <Footer />
      </div>;
  }
}

export default App;
