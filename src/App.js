import React, { Component } from 'react';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Tech from './components/Tech/Tech';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return <div className="app">
        <Header />
        <Home />
        <About />
        <Projects />
        <Tech />
        <Contact />
        <Footer />
      </div>;
  }
}

export default App;
