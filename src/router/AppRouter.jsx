import React from 'react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AppHeroes } from '../AppHeroes'

import { HeroesRoutes, childHeroesRoutes } from '../heroes/routes/HeroesRoutes'
import { LoginPage } from '../auth/pages/LoginPage'
import { PrivateRoute } from './../heroes/routes/PrivateRoute';
import { PublicRoute } from '../heroes/routes/PublicRoute'


const router = createBrowserRouter([
    {
        path: '/login',
        element: <PublicRoute>
            <LoginPage />
        </PublicRoute>,
    },
    {
        path: '/',
        element: 
            <PrivateRoute>
                <HeroesRoutes />
            </PrivateRoute>
        ,
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
