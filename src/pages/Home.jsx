import React, {useEffect} from "react";
import { MainTitle } from "../components/Functions";
import Card from "../components/Card";
import { Top } from "../components/Top";
import {Loading} from "../components/Loading";
import { Footer } from "../components/Footer";
import ReactPaginate from "react-paginate";
import { Pokelist } from "../actions/Pokelist";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { Listurl } from "../actions/Listurl";
import { Setselecter } from "../actions/Setselecter";
import { DeletePokemon } from "../actions/DeletePokemon";
import Button from '@mui/material/Button'
import { Link } from "react-router-dom";



 
const Home =()=>{

    var url = useSelector(Store => Store.Asignador_data.url)
    var pokemons = useSelector(Store => Store.Asignador_data.imgs)
    var totalpokemon = useSelector(Store => Store.Asignador_data.totalpokemon)
    const dispatch = useDispatch()
    
    useEffect(()=>{
        
        dispatch(Pokelist(url));
        window.scrollTo(0, 0)
        
    },[useSelector(Store => Store.Asignador_data.url), useSelector(Store => Store.Asignador_data.totalpokemon), useSelector(Store => Store.Asignador_data.update)])


    const handlepageclick =(data)=>{
        let target = data.selected + 1
        let inicio = target * 20 - 20
        let inicio2= inicio + 20
        dispatch(Listurl(inicio,inicio2))
        dispatch(Setselecter(data.selected))
        
    }

    MainTitle()
    
    return (

        <div >
            <Top/>
            <div className="container">
                

                <div className="contiene">
                    {pokemons != null ? (
                        
                        <div className="grid-template">
                            {pokemons.map(pokemon=>(
                                <div key={pokemon.id}>
                                    <Card
                                        key={pokemon.name}
                                        name={pokemon.name}
                                        image={pokemon.img}
                                        type={pokemon.type}  
                                        sectype={pokemon.sectype}   
                                        id={pokemon.id} 
                                        weight={pokemon.weight}  
                                        height={pokemon.height }           
                                    />

                                    
                                    <div className="cartas">
                                        <div>
                                            <Button variant="contained" color="error" onClick={()=>dispatch(DeletePokemon(pokemon.id))}>Delete
                                        
                                            </Button>
                                        </div>
                                        
                                        <div>
                                            <Link to={`/edit/${(pokemon.id)}`}>
                                                <Button variant="contained" color="primary">
                                                    Edit
                                                </Button>
                                            </Link>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                            
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
                        initialPage={useSelector(Store => Store.Asignador_data.selected)}
                        
                    />

                </div>
                
            </div>
            <Footer/>
            
        </div>

    )
}

export default Home;
