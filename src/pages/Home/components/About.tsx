import React from 'react';

// import { Container } from './styles';

const About: React.FC = () => {
  return (
    <div className="about">
      {/* Imagem minha */ }
      <h1>Diego Lopes Ferreira</h1>
      <h3>
        <li>Engineering student at UTFPR-CP</li>
        <li>Project Manager at SOLUCAUT</li>
        <li>Member of software team at VISIONSAT-UTFPR-CP</li>
        <li>Member of ENACTUS-UTFPR-CP</li>
      </h3>
      <div className="contacts">
        <ul>
          <li><a href="http://" target="_blank" rel="noopener noreferrer">Github</a></li>
          <li><a href="http://" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="http://" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="http://" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="http://" target="_blank" rel="noopener noreferrer">Site?</a></li>
        </ul>
      </div>
    </div>
  );
}

export default About;