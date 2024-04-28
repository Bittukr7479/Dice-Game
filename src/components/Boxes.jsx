
import './Boxes.css'
import React from 'react'

function Boxes(props) {
  return (
    <div className='Box' onClick={props.onClick}><p>{props.number}</p></div>
  )
}

export default Boxes