import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    
    
    const handleLogin = () => {
        const lastPath = localStorage.getItem('lastPath') || '/';
        login('Christian GM'); // no hace falta pasar el objeto user, solo el nombre
        navigate(lastPath, { replace: true });
    }

    return (
        <div className="container">
            <h1>Login</h1>
            <hr />

            <button 
                className="btn btn-secondary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
