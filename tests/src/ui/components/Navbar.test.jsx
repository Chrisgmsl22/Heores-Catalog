import { fireEvent, render, screen } from "@testing-library/react";
import { AuthContext } from "../../../../src/auth/context/AuthContext";
import { Navbar } from "../../../../src/ui/components/Navbar";
import { MemoryRouter, useNavigate } from 'react-router-dom';

const mockedUseNavigate = jest.fn();

// Podemos hacer mocks de librerias completas
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // Usa todo lo que no se ha mockeado
    useNavigate: () => mockedUseNavigate // usamos la funcion que queremos mockear y le asignamos una funcion personal
}));

describe('Pruebas en el componente <Navbar/>', () => {
    // Cuando trabjaamos con jest functions
    beforeAll(() => {
        jest.clearAllMocks();
    });

    const contextValue = {
        logged: true,
        name: 'Christian',
        dispatch: jest.fn(),
        logout: jest.fn(),
    }

    test('Debe de mostrar el nombre del usuario loggeado', () => {
        
        

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // screen.debug();
        expect(screen.getByText('CH')).toBeTruthy();
        
    });

    test('Debe de llamar el logout y navigate cuando se hace click en logout', () => {
        

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByText('Logout');
        fireEvent.click(logoutBtn);

        screen.debug();
        
        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
        
        
    });
    
    
});
