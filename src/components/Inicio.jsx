import React, {useEffect} from "react";
import { MainTitle } from "./Funciones";
import Card from "./Card";
import { Top } from "./Top";
import {Loading} from "./Loading";
import { Footer } from "./Footer";
import ReactPaginate from "react-paginate";
import { Pokelista } from "../actions/Pokelista";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { Listaurl } from "../actions/Listaurl";
import { Setselecter } from "../actions/Setselecter";


const Inicio =()=>{

    var prueba = useSelector(Store => Store.Asignador_data.url)
    const pokemones = useSelector(Store => Store.Asignador_data.imgs)
    const totalpokemon = useSelector(Store => Store.Asignador_data.totalpokemon)
    const dispatch = useDispatch()
    let pokemonperpage = 20
    
    // ?limit=2000 ?offset=20
    

    useEffect(()=>{
        
        dispatch(Pokelista(prueba));
        
    },[useSelector(Store => Store.Asignador_data.url)])

    //console.log(Store.getState())
    //console.log(pokemones)
    

    const handlepageclick =(data)=>{
        let target = data.selected + 1
        let inicio = target * 20 - 20
        dispatch(Listaurl(inicio))
        dispatch(Setselecter(data.selected))
        console.log(Setselecter(data.selected))
        
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
                    {pokemones != null ? (
                        
                        <div className="grid-template">
                            {pokemones.map(pokemon=>(

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
                    initialPage={useSelector(Store => Store.Asignador_data.selected)}
                    
                />
                </div>
                
                    
                
            </div>
            <Footer/>
            
            

        </div>

    )
}
/* const mapStateToProps = (RootReducers) => {
        return RootReducers.Asignador_data;
    };
     
export default connect(mapStateToProps, Pokelista)(Inicio);
  */
export default Inicio;
