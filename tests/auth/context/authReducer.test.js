import { authReducer } from "../../../src/auth/context/AuthReducer";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en el AuthReducer', () => {
    test('Debe de retornar el estado por defecto', () => {
        const state = authReducer({ logged: false }, {});

        expect(state).toEqual({ logged: false });
        
        
    });

    test('Debe de llamar el login autenticar y establacer el user', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Juan',
                id: '123',
            }
        }
        const state = authReducer({ logged: false }, action);

        expect(state).toEqual({ 
            logged: true, 
            user: action.payload
        });


        
    });

    test('Debe de (logout) borrar el name del usuario y el logged debe de estar en false', () => {
        const state = {
            logged: true,
            user: { name: 'Juan', id: '123' }
        }

        const action = {
            type: types.logout
        }
        const stateLogout = authReducer(state, action);

        // despues del logout, se espera que el logged cambie de true a false
        expect(stateLogout).toEqual({ logged: false });
        
    });
    
    
    
});
