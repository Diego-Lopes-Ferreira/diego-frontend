/* 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import projectList from '../../utils/project-list.json';


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

export default Home; */