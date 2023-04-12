import React from 'react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AppHeroes } from '../AppHeroes'
import { MarvelPage } from '../heroes/pages/MarvelPage'
import { DcPage } from '../heroes/pages/DcPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppHeroes />,
    },
    {
        path: '/marvel',
        element: <MarvelPage />,
    },
    {
        path: '/dc',
        element: <DcPage />,
    },
    {
        path: '*',
        element: <Navigate to='/' replace />,
    },


])

export const AppRouter = () => {
    return (
        <RouterProvider router={router} />
    )
}
