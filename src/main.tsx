import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GlobalStyles } from './GlobalStyles.ts'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
 <BrowserRouter>
 <React.StrictMode>
    <GlobalStyles/>
    <App />
  </React.StrictMode>
 </BrowserRouter>
)
