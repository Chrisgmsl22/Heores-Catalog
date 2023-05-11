import { render,  screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { AppRouter } from '../../src/router/AppRouter';
 
 
jest.mock('../../node_modules/query-string', () => '');
describe('Pruebas en <AppRouter />', () => { 
    
    test('debe de mostrar el login si no esta autenticado', () => { 
        
        const contextValue = {
            logged: false,
        }
 
        render(
            <AuthContext.Provider value={contextValue}>
                    <AppRouter />
            </AuthContext.Provider>


        );

        screen.debug();
        expect(screen.getAllByText('Login')).toBeTruthy();
     })

     test('Debe de mostrar la página marvel si está autenticado', () => {
             
            const contextValue = {
                logged: true,
                name: 'Juan'
            }
     
            render(
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            );
            screen.debug();

            expect(screen.getByText('Marvel')).toBeTruthy();
     })
     
 
 });