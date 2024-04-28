import React from 'react'
import Button from '../components/Button'
import './playingPage.css'
import handleRollClick from '../utils/resultRoll'
import { useState, useEffect } from 'react'
import Box from '../components/Boxes'
import selectedNumber from '../utils/selection'
import showRule from '../utils/showRules'
import resetScore from '../utils/reset'

function playingPage() {
  const [result, setResult] = useState(0);
  const [score, setScore] = useState(0);
  const [number, selectNumber] = useState(0);
  const [showRules, notShowRules] = useState(false);
  // console.log("result:  " + result);
  // console.log("number:  " + number);

  useEffect(() => {
    if (number == 0 && !(result == 0)) {
      // console.log("choose any number");
      document.getElementById("notSelectedNumber").innerHTML = "You have not selected any number";
    }
    else if (result == number) {
      setScore(prevScore => prevScore + parseInt(result));
      document.getElementById("notSelectedNumber").innerHTML = "";
      // console.log("success");
    } else {
      // console.log("fail");
      setScore(prevScore => prevScore - parseInt(result));
      document.getElementById("notSelectedNumber").innerHTML = "";
    }
  }, [result, number]);
  // console.log("TOTAL SCORE IS:   " + score);
  return (

    <div className='playingPage'>
      <div className='frame1'>
        <div className="total-score">
          <h1>{score}</h1>
          <h2>Total Score</h2>
        </div>
        <div className="dice-selection">
          <h3 id='notSelectedNumber'>
          </h3>
          <div className="Boxes">
            <Box number={1} id="Box-1" onClick={() => selectedNumber(1, selectNumber)} />
            <Box number={2} id="Box-1" onClick={() => selectedNumber(2, selectNumber)} />
            <Box number={3} id="Box-1" onClick={() => selectedNumber(3, selectNumber)} />
            <Box number={4} id="Box-1" onClick={() => selectedNumber(4, selectNumber)} />
            <Box number={5} id="Box-1" onClick={() => selectedNumber(5, selectNumber)} />
            <Box number={6} id="Box-1" onClick={() => selectedNumber(6, selectNumber)} />
          </div>
          <div>
            <h3 >Select Number</h3>
          </div>
        </div>
      </div>
      <div className="frame2">
        <div className="clickOnDice" onClick={() => handleRollClick(setResult)}>
          <img src={result ? `/assets/dice_${result}.png` : '/assets/dice_1.png'} alt="Dices" />
          <h2 className='roll' id='demo'>Click on Dice to roll</h2>
        </div>

        <div className="rollBtn">
          <Button btnName={"Reset Score"} onClick={() => resetScore(setScore)} />
          <Button btnName={"Show Rules"} onClick={() => showRule(showRules, notShowRules)} />
        </div>
      </div>
      {showRules && (<div className="rule" id='rule'>
        <h3>How to play dice game</h3>
        <p>Select any number <br />Click on dice image <br />after click on  dice  if selected number is equal to dice number you will get same point as dice <br />if you get wrong guess then  2 point will be dedcuted </p>
      </div>)}
    </div>
  )
}

export default playingPage