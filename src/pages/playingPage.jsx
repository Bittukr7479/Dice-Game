import React from 'react'
import Button from '../components/Button'
import './playingPage.css'
import handleRollClick from '../utils/resultRoll'
import { useState, useEffect } from 'react'
import Box from '../components/Boxes'
import selectedNumber from '../utils/selection'

function playingPage() {
  const [result, setResult] = useState("1")
  const [score, setScore] = useState(0)
  const [number, setNumber] = useState(0)
  // const [selected, numberSelected] = useState(7);
  console.log("result:  " + result);
  console.log("number:  " + number);

  useEffect(() => {
    if (number == 0) {
      console.log("choose any number");
    }
    else if (result == number) {
      setScore(prevScore => prevScore + parseInt(result));
      console.log("success");
    } else {
      console.log("fail");
    }
  }, [result, number]);
  console.log("TOTAL SCORE IS:   " + score);
  return (

    <div className='playingPage'>
      <div className='frame1'>
        <div className="total-score">
          <h1>{score}</h1>
          <h2>Total Score</h2>
        </div>
        <div className="dice-selection">
          <div className="Boxes">
            <Box className="Box 1" number={1} onClick={() => selectedNumber(1, setNumber)} />
            <Box className="Box 2" number={2} onClick={() => selectedNumber(2, setNumber)} />
            <Box className="Box 3" number={3} onClick={() => selectedNumber(3, setNumber)} />
            <Box className="Box 4" number={4} onClick={() => selectedNumber(4, setNumber)} />
            <Box className="Box 5" number={5} onClick={() => selectedNumber(5, setNumber)} />
            <Box className="Box 6" number={6} onClick={() => selectedNumber(6, setNumber)} />
          </div>
          <div>
            <h3 >Select Number</h3>
          </div>
        </div>
      </div>
      <div className="frame2">
        <div className="clickOnDice" onClick={() => handleRollClick(setResult)}>
          <img src={`/assets/dice_${result}.png`} alt="Dices" />
          <h2 className='roll' id='demo'>Click on Dice to roll</h2>
        </div>

        <div className="rollBtn">
          <Button />
          <Button />
        </div>
      </div>
    </div>
  )
}

export default playingPage