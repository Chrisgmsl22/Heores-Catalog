import React from 'react'
import { AppRouter } from './router/AppRouter';
import { AuthProvider } from './auth/context/AuthProvider';

export const AppHeroes = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  )
}

// Aqui se importó el componente Padre de las rutas, es decir el componente que contiene a las rutas de los heroes y a las rutas de los auth (AppRouter.jsx)
