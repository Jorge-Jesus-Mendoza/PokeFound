import React from 'react'
import { useEffect } from 'react';
import { Top } from '../components/Top';
import { Footer } from '../components/Footer';
import { useParams } from "react-router-dom";
import { Results } from '../components/Results';
import { Loading } from '../components/Loading';
import { Title } from '../components/Functions';
import { Pokesearch } from '../actions/Pokesearch';
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/exports";




export const Buscar = () => {

    const results = useSelector(Store => Store.SearchReducer.results)
    const dispatch = useDispatch()
    
    const params = useParams()


    useEffect(()=>{
        dispatch(Pokesearch(params.search));
        window.scrollTo(0, 0)
    },[params.search])

    Title('Search | ', params.search)
  return (

    <div>
      <Top/>
      <div className='container'>
        {results != null ? (
          
          results.map(pokemon =>(
            <Results
              key={pokemon.id}
              name={pokemon.name}
              image={pokemon.img}
              type={pokemon.type}
            />
          ))
          
        ):(<Loading/>)}
        
      </div>
      
      <Footer/>
      
    </div>
  )
}
