import React from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import Home from './components/home/Home'
import Footer from './components/Footer'
import About from './components/about/About'
import Feedback from './components/feedback/Feedback'

function App() {

  return (
    <>  
        <Header/> 
    <React.StrictMode>
    <Router>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/work" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/contact" element={<Home />} />
          <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
  <Footer/>
     </>
  )
}

export default App
