import React from 'react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AppHeroes } from '../AppHeroes'

import { HeroesRoutes, childHeroesRoutes } from '../heroes/routes/HeroesRoutes'
import { LoginPage } from '../auth/pages/LoginPage'


const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/',
        element: <HeroesRoutes />,
        children: childHeroesRoutes,
    },

]);

export const AppRouter = () => {
    return (
        <>

            <RouterProvider router={router} />
        </>
    )
}
