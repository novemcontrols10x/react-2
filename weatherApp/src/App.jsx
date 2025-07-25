import React, { useContext } from 'react'
import Weather from './pages/Weather'
import Header from './component/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import { ThemeContext } from './context/ThemeContext'

function App() {

  const { darkTheme } = useContext(ThemeContext)

  const themeStyling = {
    backgroundColor: darkTheme ? "white" : "gray",
    color: darkTheme ? "gray" : "white"
  }

  return (

    <>
      <Header />
      <div style={themeStyling} className=' h-screen'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/weather' element={<Weather />} />
        </Routes>

      </div>

    </>
  )
}

export default App

//  logo                                     navbar  togglebtn