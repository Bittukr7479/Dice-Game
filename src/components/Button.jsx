import React from 'react';

function Button(props) {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <>
      <button onClick={handleClick}>{props.btnName}</button>
    </>
  );
}

export default Button;
