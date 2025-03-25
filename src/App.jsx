import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import { NavbarComponent } from './components/NavBar'
import Home from './Pages/Home'
import About from './Pages/About'
import { FooterComponent } from './Pages/Footer'
function App() {

  return (
    <>
      <div>
        <Router>
          <NavbarComponent/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About/>}/>
          </Routes>
          <FooterComponent/>
        </Router>
      </div>
    </>
  )
}

export default App
