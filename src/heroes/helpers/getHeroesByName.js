import { heroes } from "../data/heroes";


export const getHeroesByName = (name = '') => {
    
    name = name.toLocaleLowerCase();
    if (name.length === 0) {
        // Si no hay nada en el input, regresamos un arreglo vacio
        return [];
    }
    
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name));
}