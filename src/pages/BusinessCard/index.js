import React, { useState } from 'react';
import './bussines-card.css';
import { ReactComponent as Logo } from './sherlock.svg';

function BussinesCard() {
  const [userPos, setUserPos] = useState({x:0, y:0});
  function handleMouseMove(e){
    if (window.innerWidth <= 800) {} else {
      setUserPos({x: e.nativeEvent.clientX, y: e.nativeEvent.clientY});
    }
  }
  return (
    <div className="business-card">

      <div className="wrapper" onMouseMove={handleMouseMove}>
        <div className="b-light"></div>
        <div
          className="idk"
          style={{transform: `translate(${(userPos.x-(window.innerWidth/2))*-0.05}px, ${(userPos.y-(window.innerHeight/2))*-0.05}px)`}}>
          
          <div class="b-card b-front">
            <div class="b-logo">
              <Logo 
                fill='#ffffff'
                width={window.innerWidth <= 800 ? 40 : 64}
                height={window.innerWidth <= 800 ? 40 : 64} />

            </div>
            <div class="b-company-text">Sherlock Holmes</div>
          </div>

          <div class="b-card b-back">
            <div class="b-left">
              <div class="b-name-text"><h2>William Sherlock Scott Holmes</h2></div>
              <div class="b-role-text"><h3>Consulting Detective</h3></div>
            </div>
            <div class="b-right">
              <h4><a href="https://isitchristmas.com/">watsonsblog.com</a></h4>
              <h4><a href='mailto:diego.lopes.ferreira.br@gmail.com'>sherlock@holmes.com</a></h4>
              <h4><a>221-B Baker Street, London - UK</a></h4>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BussinesCard;