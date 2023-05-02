// Este componente provee el contexto de autenticación para toda la aplicación

import { useReducer } from "react";
import { authReducer } from "./AuthReducer";
import { AuthContext } from "./AuthContext";
import { types } from "../types/types";

const initialState = {
    logged: false,
    user: null
}

const init = () => {
    //return JSON.parse(localStorage.getItem('user')) || initialState;
    const user = JSON.parse(localStorage.getItem('user'));

    return user ? { logged: true, user: user } : { logged: false };
}

// Provee informacion a toda la aplicacion
export const AuthProvider = ({ children }) => {


    // Aqui tengo que validar que el usuario este validado
    const [authState, dispatch] = useReducer(authReducer, initialState, init);
    const login = (name = '') => {
        const user = { id: 'ABC', name }
        const action = { type: types.login, payload: name }

        // Guardar en el local storage, el usuario
        localStorage.setItem('user', JSON.stringify(name));

        dispatch(action); // dispatch es una funcion que recibe una accion y la manda al reducer
    }
    const logout = () => {
        localStorage.removeItem('user');
        const action = { type: types.logout };
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            ...authState,
            login,
            logout
        }} >
            {children}
        </AuthContext.Provider>
    )
}

