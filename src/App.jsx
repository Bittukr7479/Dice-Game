import { useState } from 'react'
import Button from './components/Button'
import LandingPage from './pages/landingPage'
import PlayingPage from "./pages/playingPage";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LandingPage/>
    <PlayingPage/>
    </>
  )
}

export default App
