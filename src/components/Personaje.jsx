import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { Title } from "./Funciones";
import { Top } from "./Top";
import { Footer } from "./Footer";
import { Loading } from "./Loading";
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { Pokeperfil } from "../actions/Pokeperfil";

const Personaje =()=>{
    
    const params = useParams()

    const persona = useSelector(Store => Store.PerfilReducer.persona)
    const image = useSelector(Store => Store.PerfilReducer.image)
    const segtype = useSelector(Store => Store.PerfilReducer.segtype)
    const type = useSelector(Store => Store.PerfilReducer.type)
    const pokedescripcion = useSelector(Store => Store.PerfilReducer.pokedescripcion)
    const abilitiesdes = useSelector(Store => Store.PerfilReducer.abilitiesdes)
    const id = useSelector(Store => Store.PerfilReducer.id)
    const weight = useSelector(Store => Store.PerfilReducer.weight)
    const height = useSelector(Store => Store.PerfilReducer.height)

    

    const Navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(Pokeperfil(`http://localhost:5000/results?name=${params.name}`));
        window.scrollTo(0, 0)
    },[params.name])

    //console.log(params)

    // console.log(Store.getState())
    const definir =()=>{
        switch(abilitiesdes.length){
            case 1:
                return(
                    <div className="Habilidades-main my-5">
                        <div className="Abilities"> <b>Abilities</b> </div>
                        <div className="habilidades3">
                            {abilitiesdes.map(abildes => (
                                <div key={abildes.name} className="habilidad-descripcion">
                                    <div className="habilidad-nombre">
                                        <h6>{abildes.name}</h6>
                                    </div>
                                    <div className="desc-habil">
                                        <p className="descripcion2">{abildes.effect}</p>
                                    </div>
                                    
                                </div>
                                
                            ))}
                        </div>
                    </div>
                    
                )

            case 2:
                return(
                    <div className="Habilidades-main my-5">
                        <div className="Abilities"> <b>Abilities</b> </div>
                        <div className="habilidades">
                            {abilitiesdes.map(abildes => (
                                <div key={abildes.name} className="habilidad-descripcion">
                                    <div className="habilidad-nombre">
                                        <h6>{abildes.name}</h6>
                                    </div>
                                    <div className="desc-habil">
                                        <p className="descripcion">{abildes.effect}</p>
                                    </div>
                                    
                                </div>
                                
                            ))}
                        </div>
                    </div>
                )

            case 3:
                return(
                    <div className="Habilidades-main my-5">
                        <div className="Abilities"> <b>Abilities</b> </div>
                        <div className="habilidades2">
                            {abilitiesdes.map(abildes => (
                                <div key={abildes.name} className="habilidad-descripcion">
                                    <div className="habilidad-nombre">
                                        <h6>{abildes.name}</h6>
                                    </div>
                                    <div className="desc-habil">
                                        <p className="descripcion">{abildes.effect}</p>
                                    </div>
                                    
                                </div>
                                
                            ))}
                        </div>
                    </div>
                )
       } 

    }

    
    
    return (
        
        <div >
            
            <Top/>
            <div className="container">
                <button onClick={()=>{Navigate(-1)}}>
                    Go back
                </button>

                {persona != null ?(
                    Title('PokeFound | ', persona.name),
                    <div>
                        {/* <h1>Pokemon: {params.name}</h1> */}
                        <div className="informacion">
                                
                            <div className="pokeinfo">
                                <h2 className="fuente">{persona.name}</h2>
                                {/* {console.log(persona.name.length)} */}
                                <div className=" my-2">
                                    <img src={image} alt="This Pokemon doesn't have an official art"></img>
                                </div>
                                
                                
                                <div className="caracteristicas">

                                    <div className={`sinfo tipos s${type}`}>

                                        <p><b>{type}</b></p>
                                    </div>
                                    
                                    
                                    {segtype != null ? (
                                        <div className={`sinfo tipos s${segtype}`}>
                                            <p><b>{segtype}</b></p>
                                        </div>
                                    ) : ("")}

                                    

                                </div>

                                <div>
                                    <p className="fuente descripcion">
                                        {pokedescripcion}
                                    </p>
                                </div>
                                <div>
                                    <div>
                                        <p className="fuente"> Pokedex ID: {id} <br/>Height:{height * 10}m<br/> Weight:{weight * 10}Kg</p>
                                    </div>
                                    
                                </div>
                                
                            </div>


                            <div className="stats fuente">
                                <div className="centrado">
                                    <table>
                                        <tbody>

                                        
                                            <tr>
                                                <th className="stats-h">Hp</th>
                                                <th className="stats-h">Att</th>
                                                <th className="stats-h">Def</th>
                                                <th className="stats-h">s-att</th>
                                                <th className="stats-h">s-def</th>
                                                <th className="stats-h">Speed</th>   
                                            </tr>
                                            <tr>
                                                <td className="stats-d">{persona.stats[0].base_stat}</td>
                                                <td className="stats-d">{persona.stats[1].base_stat}</td>
                                                <td className="stats-d">{persona.stats[2].base_stat}</td>
                                                <td className="stats-d">{persona.stats[3].base_stat}</td>
                                                <td className="stats-d">{persona.stats[4].base_stat}</td>
                                                <td className="stats-d">{persona.stats[5].base_stat}</td>
                                                
                                            </tr>
                                        
                                        </tbody>
                                    </table>

                                    {definir()}
                                        
                                </div>
                            </div>
                            
                            
                        </div>
                        {/* <div className="Nexr-Prev">
                            {persona.id !== 1 ? (
                                <button className="btn btn-next btn-info" onClick={()=>{Navigate( `/pokemon/${persona.id -1}` )}}>Prev Pokemon</button>
                            ) : (<></>)}


                            <button className="btn btn-next btn-info" onClick={()=>{Navigate( `/pokemon/${persona.id +1}` )}}>Next Pokemon</button>
                            
                        </div> */}
                    </div>

                ) : (<Loading/>)}
            </div>
            <Footer/>
        </div>
        
    )
}
export default Personaje