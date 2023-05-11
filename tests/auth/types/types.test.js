import { types } from "../../../src/auth/types/types";

describe('Pruebas en "types.js"', () => {
    test('Debe de regresar estos types', () => {
        // const types = {
        //     login: '[auth] login',
        //     logout: '[auth] logout',
        // }
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        });
        
    });
    
});
