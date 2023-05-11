import { fireEvent, render, screen } from "@testing-library/react";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";
import { MemoryRouter, useNavigate } from "react-router-dom";

// requireActual para el useNavigate
const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));


describe('Pruebas en el componente SearchPage', () => {

    beforeAll(() => {
        jest.clearAllMocks();
    });

    test('Debe de mostrarse correctamente con valores por defecto', () => {
        const {container} = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        // screen.debug();

        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar a Batman y el input con el valor del QueryString', () => {
        const {container} = render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );
        const input = screen.getByRole('textbox');
        const title = screen.getByText('Batman');
        const img = screen.getByRole('img');

        //screen.debug();

        //expect(screen.getByRole('textbox')).toHaveValue('batman');
        expect(input.value).toBe('batman');
        expect(title).toBeTruthy();
        expect(img.src).toContain('/heroes/dc-batman.jpg');
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar error si no se encuentra un héroe', () => {
        const {container} = render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        );
        // Obtenemos del aria-label
        const error = screen.getByLabelText('error');

        // screen.debug();

        expect(error).toBeTruthy();
        expect(error.style.display).toBe('block');
        expect(container).toMatchSnapshot();
        
    });

    test('Debe de llamar el navigate a la pantalla nueva', () => {
        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        );
        screen.debug();
        
        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {value: 'spiderman'}});

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        expect(mockedUseNavigate).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith('/search?q=spiderman');
    });
    
    
    

    
    
});
