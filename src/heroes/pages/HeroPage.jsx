import React, { useMemo } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers/getHeroById';

export const HeroPage = () => {

    const {id} = useParams();
    const currentHero = useMemo(() => getHeroById(id), [id]); 
    console.log(currentHero);

    const onNavigateBack = () => {
        window.history.back();
    }

    if (!currentHero) {
        return <Navigate to='/marvel'/>
    }
    return (
        <div className='row mt-5'>
            <div className="col-4">
                <img
                    src={`../assets/heroes/${id}.jpg`}
                    alt={currentHero.superhero}
                    className='img-thumbnail animate__animated animate__fadeInLeft'
                />
            </div>

            <div className="col-8">
                <h3>{currentHero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego:</b> {currentHero.alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher:</b> {currentHero.publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First appearance:</b> {currentHero.first_appearance}
                    </li>
                </ul>

                <h5 className='mt-3'>Characters</h5>
                <p>{currentHero.characters}</p>

                <button 
                    className='btn btn-outline-info'
                    onClick={onNavigateBack}
                >
                    Return
                </button>
            </div>
        </div>

    )
}


// () => window.history.back() para ir hacia atras