import { render, screen } from "@testing-library/react";
import { PublicRoute, PublicRoute2 } from "../../src/heroes/routes/PublicRoute";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from './../../src/auth/context/AuthContext';

describe('Pruebas en el PublicRoute', () => {
    test('Debe de mostrar el children, si no esta autenticado', () => {
        const contextValue = {
            logged: false,
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <span>Test</span>
                </PublicRoute>

            </AuthContext.Provider>
        );

        //screen.debug();
        expect(screen.getByText('Test')).toBeTruthy();
    });

    test('Debe de navegar si está autenticado', () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'Juan',
                id: 1234,
            },
        };
        const history = createMemoryHistory({
            initialEntries: ['/login'],
        });

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter history={history}>
                    <Routes>
                        <Route
                            path="login"
                            element={<PublicRoute />}
                        />
                        <Route
                            path="marvel"
                            element={<h1>Marvel Page</h1>}
                        />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        screen.debug();
        expect(screen.getByText('Marvel Page')).toBeTruthy();
    })


});
