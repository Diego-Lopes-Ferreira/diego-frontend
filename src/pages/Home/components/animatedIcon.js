import React from 'react';

import { IconContext } from 'react-icons'
import { FiGithub, FiBook, FiHeadphones, FiAtSign, FiSettings, FiAlertTriangle } from 'react-icons/fi';

function AnimatedIcon({ type, delay }) {
  return (
    <div className="testeee" style={ { animationDelay: `${delay}ms` } }>
      <SelectIcon type={ type } />
    </div>
  );
}
export default AnimatedIcon;


function SelectIcon({ type }) {
  const size = 100;
  switch (type) {
    case 'github': return <FiGithub size={ size } />
    case 'book': return <FiBook size={ size } />
    default: {
      console.warn(`The type: "${type}" is not on the list of icons, please check the current icons list in '~/src/pages/Home/components/animatedIcon.js'`)
      return <FiAlertTriangle size={ size } />
    }
  }
}