import React from 'react'
import { Navbar } from '../../ui/components/Navbar'
import { MarvelPage } from './../pages/MarvelPage';
import { DcPage } from './../pages/DcPage';
import { LoginPage } from './../../auth/pages/LoginPage';
import { Navigate, Outlet } from 'react-router-dom';
import { SearchPage } from '../pages/SearchPage';
import { HeroPage } from '../pages/HeroPage';



//Creamos un a coleccion de las rutas de los heroes y la exportamos
export const childHeroesRoutes = [
    {
        path: '/marvel',
        element: <MarvelPage />,
    },
    {
        path: '/dc',
        element: <DcPage />,
    },
    {
        path: '/search',
        element: <SearchPage />
    },
    {
        path: '/hero/:id',
        element: <HeroPage/>
    },
    {
        path: '/*',
        element: <Navigate to='/marvel' replace />,
    },
]
    



export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Outlet/>
            </div>
        </>
    )
}
