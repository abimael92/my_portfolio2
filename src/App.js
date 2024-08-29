import React from 'react';
import logo from './logo.svg';
import './App.css';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Component Imports
import { Banner, Contact, Footer, NavBar, Projects, Skills } from './components';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
