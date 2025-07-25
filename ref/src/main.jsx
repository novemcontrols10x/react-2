import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NumberGuess from './NumberGuess.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <NumberGuess/>
  </StrictMode>,
)


// its doesnt re render the component


// its used to work with dom elements



