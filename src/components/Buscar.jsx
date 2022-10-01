import React from 'react'
import { Todoslospersonajes, MainTitle,Encontrar } from "./Funciones";
import { useState, useEffect } from 'react';
import { Top } from './Top';
import { Footer } from './Footer';
import { useParams } from "react-router-dom";
import { Busqueda } from './Busqueda';
import { Loading } from './Loading';
import { Title } from './Funciones';




export const Buscar = () => {

    const [imgs, setImgs]=useState(null)
    const [next,setNext]=useState(null)
    const [previous,setPrevious]=useState(null)
    const [url, setUrl] = useState ('https://pokeapi.co/api/v2/pokemon/?limit=2000')
    const [pagenumber, setPagenumber]=useState(0)
    const params = useParams()


    useEffect(()=>{
        Encontrar(setImgs,params.search);
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
        {imgs != null ? (
          
          imgs.map(pokemon =>(
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
