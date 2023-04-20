import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { AppRouter } from './router/AppRouter';
import { AppHeroes } from './AppHeroes';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppHeroes/>
  </React.StrictMode>,
)
