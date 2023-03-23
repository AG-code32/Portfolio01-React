import React from 'react'

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {   BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage'
import ResumePage from './pages/ResumePage'
// import Nav from './components/nav/Nav'
// import ScrollToTop from './components/scrollToTop/ScrollToTop'



function App() {
  return (
    <>
        <BrowserRouter>

          {/* <ScrollToTop /> */}
          {/* <Nav displayResume={true} navScrollY={3800} gapResume={false}/> */}

          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/resume' element={<ResumePage />}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App