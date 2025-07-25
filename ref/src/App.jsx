import React, { useRef, useState } from 'react'

function App() {

  const [num, setNum] = useState(0)
  const refValue = useRef(0)

  function increamentState() {
    setNum(num + 1)
    console.log('state rendered when state update', num)
  }

  function increamentRef() {
    refValue.current++
    console.log('refValue doest render component', refValue)
  }



  return (
    <div>
      <p>{num}</p>
      <button onClick={increamentState}>increase State</button>
      <p>{refValue.current}</p>
      <button onClick={increamentRef}>increase ref Value</button>
    </div>

  )
}

export default App

