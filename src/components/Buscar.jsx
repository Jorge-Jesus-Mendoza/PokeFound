import React from 'react'
import { useEffect } from 'react';
import { Top } from './Top';
import { Footer } from './Footer';
import { useParams } from "react-router-dom";
import { Busqueda } from './Busqueda';
import { Loading } from './Loading';
import { Title } from './Funciones';
import { Pokesearch } from '../actions/Pokesearch';
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/exports";




export const Buscar = () => {

    //const [imgs, setImgs]=useState(null)
    const results = useSelector(Store => Store.SearchReducer.results)
    const dispatch = useDispatch()
    
    const params = useParams()


    useEffect(()=>{
        dispatch(Pokesearch(params.search));
        window.scrollTo(0, 0)
    },[params.search])

    /* if (imgs != null){
      console.log(imgs.length)
    } */
    Title('Search | ', params.search)
  return (

    <div>
      <Top/>
      <div className='container'>
        {results != null ? (
          
          results.map(pokemon =>(
            <Busqueda
              key={pokemon.name}
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
