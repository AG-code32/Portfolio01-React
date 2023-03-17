import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experiences from './components/experiences/Experiences'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {   BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage'
import ResumePage from './pages/ResumePage'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/resume' element={<ResumePage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App