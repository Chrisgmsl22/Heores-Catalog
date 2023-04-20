import React from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';
import { HeroCard } from './HeroCard';
import { useMemo } from 'react';

export const HeroList = ({publisher}) => {

    // En caso de cambiar de estado, hay que usar useMemo
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <>
            <div 
                className='row rows-cols-1 row-cols-md-3 g-3'
            >
                {
                    heroes.map(hero => (
                        <HeroCard 
                            key={hero.id}
                            {...hero}

                        />
                    ))
                }

            </div>
        </>
    )
}
