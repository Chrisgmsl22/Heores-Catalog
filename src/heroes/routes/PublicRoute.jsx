import React from 'react'
import { AuthContext } from '../../auth/context/AuthContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({children}) => {
   const {logged} = useContext(AuthContext); 
  return ((logged) ? <Navigate to='/' replace /> : children )
}


export const PublicRoute2 = ({children, ...props}) => {
  const {logged} = useContext(AuthContext);
  if (logged) {
    props.router.navigate('/', {replace: true});
    return null;
  }
  return children;
}