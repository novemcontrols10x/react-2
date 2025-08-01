import { createContext, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextProvider } from './context/UserContext.jsx'





createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>

  </StrictMode >,
)


