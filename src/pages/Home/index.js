import React from 'react';
import './home.css';
import './cards.css';


function WhoAmI() {
  return (
    <div className="who">
      <h2>Diego Lopes Ferreira</h2>
      <h4>Engeneering student at <a href="http://portal.utfpr.edu.br/" target="blank">UTFPR-CP, Brazil </a>
        Member of software team at <a href="https://www.instagram.com/visionsat.utfpr/" target="blank">VISIONSAT-UTFPR-CP </a>
        , <a href="https://www.linkedin.com/company/enactus-cp/" target="blank">ENACTUS-UTFPR-CP </a>
        and trainee at <a href="https://solucaut.com.br/" target="blank">SOLUCAUT </a>
      </h4>
      <h4>Programmer for fun and whatever</h4>
    </div>
  );
}

function Card({ img, title, desc, what}) {
  return (
    <div className="card">
      <img src="" alt="" />
      <h3>{title}</h3>
      <h4>{desc}</h4>
    </div>
  );
}

const descLong1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
const descLong2 = 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
const descLong3 = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

function Home() {
  return (
    <div className="home">
      <header></header>
      <div className="cube"></div>
      <WhoAmI />
      <div className="portifolio">
        <h2>Portiofolio</h2>
        <h4>Some examples of my finished projects and a sample of what I'm working on</h4>
      </div>

      <div className="cards">
        <Card title='Bom dia' desc={descLong2} />
        <Card title='Bom dia' desc={descLong1} />
        <Card title='Bom dia' desc={descLong1} />
        <Card title='Bom dia' desc={descLong3} />
        <Card title='Bom dia' desc={descLong2} />
        <Card title='Bom dia' desc={descLong3} />
      </div>
    </div>
  );
}

export default Home;