import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/Aboutme';
import Resume from './components/resume/Resume';
import Projects from './components/projects/Projects';
import Footer from './components/footer/footer';
import personalData from './personalData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header personalData={personalData}/>
        <About personalData={personalData}/>
        <Resume personalData={personalData}/>
        <Projects personalData={personalData}/>
        <Footer personalData={personalData}/>
      </div>
    );
  }
}

export default App;
