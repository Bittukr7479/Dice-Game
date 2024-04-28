import { useState } from 'react'
import Button from './components/Button'
import LandingPage from './pages/landingPage'
import PlayingPage from "./pages/playingPage";
import './App.css'

function App() {
  const [re, setre]= useState(true)
  return (
    <>
      <LandingPage />
      {re && <PlayingPage />}
    </>
  )
}

export default App
