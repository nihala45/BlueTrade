import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function App() {

  return (
  <Router>
    <Routes>
      <Route  path='/' element={ <Home/>} />
      <Route  path='/shop' element={ <Shop/>} />
      </Routes>
      </Router>
  )
}

export default App
