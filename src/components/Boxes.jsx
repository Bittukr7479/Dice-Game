
// import './Boxes.css'
// import React from 'react'

// function Boxes(props) {
//   return (
//     <div className='Box' id="Boxone" onClick={props.onClick}>
//       <p>{props.number}</p>
//       </div>
//   )
// }

// export default Boxes

import React, { useState } from 'react';
import './Boxes.css';

function Boxes(props) {
  // const [backgroundColor, setBackgroundColor] = useState("white");
  // const [color, setColor]= useState("black");

  const clickOnNumber = () => {
    // setBackgroundColor("black");
    // setColor("white");
    // props.onClick();
    console.log(props.number);
  };

  return (
    <div className='Box' id={props.number} /*style={{ backgroundColor, color}}*/ onClick={clickOnNumber}>
      <p>{props.number}</p>
    </div>
  );
}

export default Boxes;
