import React from 'react'
import { Link } from 'react-router-dom';

//Functional component
const CharactersByHero = ({alter_ego, characters}) => {
    if (alter_ego === characters) {
        return <></>
    } else {
        return <p className="card-text">{characters}</p>
    }
}



export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {

    const heroUrl = `/heroes/${id}.jpg`;
    //const charactersByHeroe = (<p className="card-text">{characters}</p>)

    return (
        <div className='col animate__animated animate__fadeIn'>
            <div className='card'>
                <div className='row no-gutters'>
                    <div className='col-4 '> 
                        <img 
                            src={heroUrl}
                            className='card-img' 
                            alt={superhero} 
                        />
                    </div>
                    <div className='col-8'>
                       <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {/* Validacion para mostrar la informacion completa */}
                            <CharactersByHero 
                                alter_ego={alter_ego} c
                                haracters={characters}/>

                            <p className="card-text">
                                <small className="text-muted">          {first_appearance}
                                </small>
                            </p>

                            {/* Ver mas informacion del heroe */}
                            <Link to={`../hero/${id}`}>
                                Mas...
                            </Link>
                       </div> 
                    </div>
                </div>
            </div>
        
                   
            
        </div>
    )
}
