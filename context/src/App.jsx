import React, { useContext } from 'react'
import { MyContext } from './context/UserContext'
// import { myCOntext } from './main'

function App() {

  const { theme, toggleTheme } = useContext(MyContext)
  console.log(theme)


  return (
    <>
      <div >App</div>
      <button onClick={toggleTheme}>change theme</button>
    </>
  )
}

export default App


/*

navbar << toggle theme (right top) 
hero << bg == light |dark , color == back | gray
footer

*/