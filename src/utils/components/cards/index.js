import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './cards.css';

function Card({ img, title, desc, link}) {
  const [focused, setFocus] = useState(true);
  return (
    <div
      className="card"
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(true)}
      >
        <div className="img">
          <img src={require('../../../assets/ecoleta-capa-a.png')} alt={title} />
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


export default Cards;