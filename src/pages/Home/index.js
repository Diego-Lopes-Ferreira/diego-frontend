import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import './cards.css';

import projectList from '../../utils/project-list.json';



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
  return (
    <header>
      <h1>OI</h1>
    </header>
  );
}

function Card({ img, title, desc, link}) {
  const [focused, setFocus] = useState(true);
  return (
    <div
      className="card"
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(true)}
      >
        <div className="img">
          <img src={require('../../assets/ecoleta-capa.png')} alt={title} />
        </div>
        <h3>{title}</h3>
        <h4>{desc}</h4>
        {focused ? <Link to={{pathname: link}}><p>Check it out</p></Link> : ""}
    </div>
  );
}

function Cards({ projects }) {
  let c = 0;
  const cardList = projects.map((project) => {
    c += 1;
    return (
      <Card 
        key={c}
        img={project.photo}
        title={project.title}
        desc={project.description}
        link={project.link} />
    );
  });
  return (
    <div className="cards">
      {cardList}
    </div>
  );
}

function Home() {
  return (
    <div className="home-page">
      <Header />
      <div className="cube"></div>
      <WhoAmI />
      <div className="portifolio">
        <h2>Portiofolio</h2>
        <h4>Some examples of my finished projects and a sample of what I'm working on</h4>
      </div>
      <Cards projects={projectList} />
      <div className="white-space" style={{height: 100}}></div>
    </div>
  );
}

export default Home;