import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { Title } from "../components/Functions";
import { Top } from "../components/Top";
import { Footer } from "../components/Footer";
import { Loading } from "../components/Loading";
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/exports";
import { Pokedata } from "../actions/Pokedata";
import { StatsL } from "../components/StatsL";
import { Skills } from "../components/Skills";
import { Pokeinfo } from "../components/Pokeinfo";
import Button from '@mui/material/Button'
import Url from "../config/Url"

const Pokemon =()=>{
    
    const params = useParams()

    const pokemon = useSelector(Store => Store.PerfilReducer.pokemon)
    const image = useSelector(Store => Store.PerfilReducer.image)
    const segtype = useSelector(Store => Store.PerfilReducer.segtype)
    const type = useSelector(Store => Store.PerfilReducer.type)
    const pokedescription = useSelector(Store => Store.PerfilReducer.pokedescription)
    const abilitiesdes = useSelector(Store => Store.PerfilReducer.abilitiesdes)
    const id = useSelector(Store => Store.PerfilReducer.id)
    const weight = useSelector(Store => Store.PerfilReducer.weight)
    const height = useSelector(Store => Store.PerfilReducer.height)

    const Navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(Pokedata(`${Url}?name=${params.name}`));
        window.scrollTo(0, 0)
    },[params.name])

    return (
        
        <div >
            
            <Top/>
            <div className="container">
                

                <Button variant="outlined" color="primary" onClick={()=>{Navigate(-1)}}>
                  Go back
                </Button>

                {pokemon != null ?(
                    Title('PokeFound | ', pokemon.name),
                    
                        
                    <div className="informacion">
                            
                        <Pokeinfo
                            id={id}
                            pokemon={pokemon}
                            image={image}
                            type={type}
                            segtype={segtype}
                            pokedescription={pokedescription}
                            height={height}
                            weight={weight}

                        />

                        <div className="stats fuente">
                            <div className="centrado">

                                <StatsL
                                    stats={pokemon.stats}
                                />
                                
                                <Skills
                                    skills={abilitiesdes}
                                />

                            </div>
                        </div>
                        
                    </div>
                        
                ) : (<Loading/>)}
            </div>
            <Footer/>
        </div>
        
    )
}
export default Pokemon