import React from 'react';
import { Parallax } from 'react-parallax';
import { Element } from 'react-scroll';
import Introduction from './Introduction.jsx';
import AboutMe from './AboutMe.jsx';
import Contact from './Contact.jsx';
import './App.css'; // Import your CSS file for styling

const App = () => {
  return (
    <div className="app">
      <Parallax bgImage="../photos/portrait.jpg" strength={500}>
        <Element name="intro" className="element">
          <Introduction />
        </Element>
      </Parallax>

      <Parallax bgImage="../photos/P6070282-Enhanced-NR.jpg" strength={500}>
        <Element name="about" className="element">
          <AboutMe />
        </Element>
      </Parallax>

      <Element name="contact" className="element">
        <Contact />
      </Element>
    </div>
  );
};

export default App;