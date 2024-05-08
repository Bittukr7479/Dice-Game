import React from 'react'
import Button from '../components/Button'
import './playingPage.css'
import handleRollClick from '../utils/resultRoll'
import { useState, useEffect, useRef } from 'react'
import selectedNumber from '../utils/selection'
import showRule from '../utils/showRules'
import resetScore from '../utils/reset'
import ButtonGroup from '../components/ButtonGroup'
import { BrowserRouter} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';

const buttons = [
  "1", "2", "3", "4", "5", "6"
]

function playingPage() {
  const [isSelected, setIsSelected] = useState(0)
  const [result, setResult] = useState(0);
  const [score, setScore] = useState(0);
  // const [isSelected, selectNumber] = useState(0);
  const [showRules, notShowRules] = useState(false);
  console.log("result:  " + result);
  console.log("isSelected:  " + isSelected);

  useEffect(() => {
    if (isSelected == 0 && !(result == 0 || result =="")) {
      // console.log("choose any isSelected");
      document.getElementById("notSelectedNumber").innerHTML = "You have not selected any number";
      setResult();
    }
    else if ((result == isSelected) ) {
      setScore(prevScore => prevScore + parseInt(result));
      document.getElementById("notSelectedNumber").innerHTML = "";
      // console.log("success");
    } else if(result && isSelected){
      setScore(prevScore => prevScore - parseInt(isSelected));
      document.getElementById("notSelectedNumber").innerHTML = "";
    }
  }, [result, isSelected]);
  // console.log("TOTAL SCORE IS:   " + score);
  return (

    <div className='playingPage' id='play'>
      <div className='frame1'>
        <div className="total-score">
          <h1>{score}</h1>
          <h2>Total Score</h2>
        </div>
        <div className="dice-selection">
          <h3 id='notSelectedNumber'>
          </h3>
          <div className='app-container'>
            <ButtonGroup buttons={buttons} isSelected={isSelected} setIsSelected={setIsSelected} />
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
          <Button btnName={"Reset Score"} onClick={() => resetScore(setScore, setIsSelected, setResult)} />
         <header>
         <Link to="#rule">
          <Button btnName={showRules?"Hide Rules": "Show Rules"} onClick={() => showRule(showRules, notShowRules)} />
         </Link>
       </header>
        </div>
      </div>
      {showRules && (
      <div className="rule" id='rule'>
        <h3>How to play dice game</h3>
        <p>Select any number <br />Click on dice image <br />after click on  dice  if selected number is equal to dice number you will get same point as dice <br />if you give wrong guess then same (chosen number) point will be dedcuted </p>
      </div>)}
    </div>
  )
}

export default playingPage