import React, {useState,useEffect} from "react";
import { Todoslospokemon, MainTitle } from "./Funciones";
import {Link} from 'react-router-dom'
import Card from "./Card";
import { Top } from "./Top";
import {Loading} from "./Loading"
import { Footer } from "./Footer";
import ReactPaginate from "react-paginate";

const Inicio =()=>{

    const [imgs, setImgs]=useState(null)
    const [next,setNext]=useState(null)
    const [previous,setPrevious]=useState(null)
    const [pagenumber, setPagenumber]=useState(0)
    const [url, setUrl] = useState (`https://pokeapi.co/api/v2/pokemon/?offset=${pagenumber}`)
    const [totalpokemon, setTotalpokemon] = useState(null) 
    let pokemonperpage = 20
    
    
    
    // ?limit=2000 ?offset=20
    

    useEffect(()=>{
        Todoslospokemon(url,setImgs,setNext,setPrevious,setTotalpokemon)
    },[url])

    const handlepageclick =(data)=>{
        let target = data.selected + 1
        let inicio = target * 20 - 20
        setUrl(`https://pokeapi.co/api/v2/pokemon/?offset=${inicio}`)
    }


    MainTitle('PokeFound')
    
    return (

        
        
        <div >
            <Top/>
            <div className="container">
                {/* <div>
                    <input></input>
                </div> */}

                <div className="contiene">
                    {imgs != null ? (

                        <div className="grid-template">
                            {imgs.map(pokemon=>(

                                <Card
                                    key={pokemon.name}
                                    nombre={pokemon.name}
                                    image={pokemon.img}
                                    type={pokemon.type}  
                                    sectype={pokemon.sectype}   
                                    id={pokemon.id} 
                                    weight={pokemon.weight}  
                                    height={pokemon.height}           
                                />
                            
                            ))}
                        </div>
                    ) : (<div>
                            <Loading/>
                            <div className="rellenando"></div>
                        </div>)}
            
                <ReactPaginate


                    breakLabel={"..."}
                    
                    nextLabel="next >"                    
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={1}
                    //marginPagesDisplayed={2}
                    pageCount={Math.ceil(totalpokemon/20)}
                    previousLabel="< previous"
                    onPageChange={handlepageclick}
                    containerClassName={"pagination justify-content-center fuente Botones"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    activeClassName={"active"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                />
                </div>
                
                    
                
            </div>
            <Footer/>
            
            

        </div>

    )
}

export default Inicio
