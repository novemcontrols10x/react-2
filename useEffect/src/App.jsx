import React, { useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'

function App() {

  // useEffect(() => {
  //   first


  // }, [third])




  return (
    <>
      <div className='h-52 w-screen text-green-600 text-center '>
        <h1 className=''>Welcome to My App</h1>
        <Link to={'/home'} > go to home page </Link>
        <Link to={'/about'} > go to about page </Link>
      </div>

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  )
}

export default App