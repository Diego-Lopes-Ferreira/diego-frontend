import React from 'react';
import './styles.css';


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

function Home () {
  return (
    <div className="App">
        <header></header>
        <div className="cube"></div>
        <WhoAmI />
        <div className="cards">
          <div className="card">
            <img src="" alt=""/>
            <h3>aaa</h3>
            <h4>aaaaaaaaa</h4>
          </div>
        </div>
      </div>
  );
}

export default Home;