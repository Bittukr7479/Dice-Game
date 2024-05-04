import React from 'react';

function ButtonGroup({ buttons, isSelected, setIsSelected }) {
  return (
    <div className='button-container'>
      {buttons.map((text, index) => (
        <button
          key={index}
          id={index}
          className={isSelected === (index+1) ? 'selected-button' : 'button'}
          onClick={() => setIsSelected(index+1)}
        >
          <p>{text}</p>
        </button>
      ))}
    </div>
  );
}

export default ButtonGroup;
