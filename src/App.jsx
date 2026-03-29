
import React from 'react'
import LandingPage from './components/LandingPage'
import GamePage from './components/GamePage'


import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    
    <Routes>
      <Route path='/'  element={<LandingPage />} />
      <Route path="/gamePage" element={<GamePage />} />
    </Routes>
    
    </>
  )
}

export default App
