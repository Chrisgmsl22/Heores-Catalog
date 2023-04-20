import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './ui/components/Navbar'
import { AppRouter } from './router/AppRouter';

export const AppHeroes = () => {
  return (
    <>
        <AppRouter/>
    </> 
    )
}

// Aqui se importó el componente Padre de las rutas, es decir el componente que contiene a las rutas de los heroes y a las rutas de los auth (AppRouter.jsx)
