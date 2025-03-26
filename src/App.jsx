import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import { NavbarComponent } from './components/NavBar'
import Home from './Pages/Home'
import About from './Pages/About'
import { FooterComponent } from './components/Footer'
import Events from './Pages/Events'
import ContactPage from './Pages/contacts'
function App() {

  return (
    <>
      <div>
        <Router>
          <NavbarComponent/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About/>}/>
            <Route path="/events" element={<Events/>}/>
            <Route path='/contacts' element={<ContactPage/>}/>
          </Routes>
          <FooterComponent/>
        </Router>
      </div>
    </>
  )
}

export default App
