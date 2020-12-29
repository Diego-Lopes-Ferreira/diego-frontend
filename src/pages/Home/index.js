import React, { useState } from 'react';
import './home.css';

import './wow.css';

import projectList from '../../utils/project-list.json';
import Cards from '../../utils/components/cards/index';
import AnimatedIcon from './components/animatedIcon';

var projects = projectList.filter(item => item.main);

function WhoAmI() {
  return (
    <div className="who">
      <h2>Diego Lopes Ferreira</h2>
      <h4>Engeneering student at <a href="http://portal.utfpr.edu.br/" target="blank">UTFPR-CP, Brazil </a>
        , Member of software team at <a href="https://www.instagram.com/visionsat.utfpr/" target="blank">VISIONSAT-UTFPR-CP </a>
        , <a href="https://www.linkedin.com/company/enactus-cp/" target="blank">ENACTUS-UTFPR-CP </a>
        and trainee at <a href="https://solucaut.com.br/" target="blank">SOLUCAUT </a>
      </h4>
      <h4>Programmer for fun and whatever</h4>
    </div>
  );
}

function Header() {
  const color = '#ffffff';
  return (
    <section className="section-wow">
      <div className="svgs-wrapper">
        <AnimatedIcon type="github" delay={ 0 } />
        <AnimatedIcon type="book" delay={ 300 } />
        <AnimatedIcon type="asdasd" delay={ 600 } />
        <AnimatedIcon type="github" delay={ 900 } />
      </div>
      <img src={ require('./assets/bg-idea-1-small.jpg') } alt="cool background" />
      {/* svg wrapper */ }
      {/* svg1 */ }
      {/* svg2 */ }
      {/* svg3 */ }
      {/* svg4 */ }
      {/* svg5 */ }
      {/* svg wrapper */ }
      {/* background image */ }
      {/* my face */ }
    </section>
  );
}

function Home() {
  return (
    <div className="home-page">

      <Header />

      <div className="content">
        <div className="cube"></div>
        <WhoAmI />
        <div className="portifolio">
          <h2>Portiofolio</h2>
          <h4>Some examples of my finished projects and a sample of what I'm working on</h4>
        </div>
        <Cards projects={ projects } />
      </div>

      <div className="white-space" style={ { height: 100 } }></div>
    </div>
  );
}

export default Home;