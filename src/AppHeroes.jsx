import React from 'react'
import { Outlet } from 'react-router-dom'

export const AppHeroes = () => {
  return (
    <>
        <h1>App Heroes</h1>
        <Outlet/>
    </>
    )
}
