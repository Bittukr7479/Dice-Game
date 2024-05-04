import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom/client';
// import dices from '../assets/dices.png'
import Button from '../components/Button'
import './landingPage.css'
import PlayingPage from './playingPage'
import { BrowserRouter} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';


function LandingPage() {
  return (
    <>
      <BrowserRouter>
        <div className='landingPage'>
          <div className="image">
            <img src={`/assets/dices.png`} alt="Dices" />
          </div>
          <div className="dice-game">
            <h1>DICE GAME</h1>
            <div className='playNow'>
              <header>
                <Link to="#play">
              <Button btnName={"Play Now"}/>
                </Link>
              </header>
              
            </div>
          </div>
        </div>
        <PlayingPage/>
      </BrowserRouter>
    </>
  )
}

export default LandingPage