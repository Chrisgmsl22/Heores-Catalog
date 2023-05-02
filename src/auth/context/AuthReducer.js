import { types } from "../types/types";

// El reducer es una funcion pura que recibe el estado y la accion
// y regresa el nuevo estado



export const authReducer = (state, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload
            }
        case types.logout:
            return {
                logged: false,
                
            }
        default:
            return state;
    }
}

// q: que hace este authReducer?
// a: recibe el estado y la accion y regresa el nuevo estado
