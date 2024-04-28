import React from 'react'
// import dices from '../assets/dices.png'
import Button from '../components/Button'
import './landingPage.css'

function LandingPage() {
  return (
    <div className='landingPage'>
      <div className="image">
      <img src={`/assets/dices.png`} alt="Dices" />
      </div>
      <div className="dice-game">
        <h1>DICE GAME</h1>
        <div className='playNow'>
          <Button />
        </div>
      </div>
    </div>
  )
}

export default LandingPage