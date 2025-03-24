import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import { NavbarComponent } from './components/NavBar'
import Home from './Pages/Home'
function App() {

  return (
    <>
      <div>
        <Router>
          <NavbarComponent/>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
