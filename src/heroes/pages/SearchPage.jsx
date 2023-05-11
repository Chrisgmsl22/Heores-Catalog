import React from 'react'
import { HeroCard } from '../components/HeroCard'
import { useForm } from '../../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroesByName } from '../helpers/getHeroesByName';

export const SearchPage = () => {

  // React router dom hooks
  const navigate = useNavigate();
  const location = useLocation(); // Nos da la informacion de la ruta actual

  // Extraemos el query string
  const {q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q);
  const showSearch = (q.length === 0) ? true : false;
  const showError = (q.length > 0) && (heroes.length === 0) ? true : false;

  const {searchText, onInputChange} = useForm({
    searchText: q,
  });

  const handleSearchSubmit = (e) => {
    e.preventDefault(); //Evita que se recargue la pagina
    
    // hacemos la navegacion a la ruta de search
    navigate(`/search?q=${searchText.toLowerCase().trim()}`);

  }


  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={handleSearchSubmit} aria-label='form'>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button
              type="submit"
              className="btn mt-1 btn-block btn-outline-secondary"
            >
              Search...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* {
            (q === '') 
            ?  <div className="alert alert-info"> Search a hero </div>
            : (heroes.length === 0) && <div className="alert alert-danger"> There's no response on <b>{q}</b> </div>
              
          } */}

          <div 
            className="alert alert-info animate__animated animate__fadeIn"
            style={{display: (showSearch) ? '' : 'none'}}
          >
            Search a hero
          </div>
          <div 
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{display: (showError) ? 'block' : 'none'}}
            aria-label='error'
          >
            There's no response on <b>{q}</b>
          </div>

          {
            heroes.map(hero => (
              <HeroCard
                key={hero.id}
                {...hero}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}
