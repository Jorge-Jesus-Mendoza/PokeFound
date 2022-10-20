import React from 'react'
import { Top } from '../components/Top'
import { Footer } from "../components/Footer";
import { useState } from 'react';
import Card from "../components/Card";
import { useDispatch } from 'react-redux';
import { NewPokemon } from '../actions/NewPokemon';
import { useNavigate } from 'react-router-dom';
import {Title } from '../components/Functions';
import { StatsS } from '../components/StatsS';
import { Form } from '../components/Form';
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'




export const New = () => {

        const [data, setData] = useState({name: "", type: "", s_type:null, artwork:"", preview:"", weight:0, heigth:0, attack:0, defense:0, hp:0, speed:0, s_attack:0, s_defense:0, ability:"", s_ability:"", h_ability:"", abilitydes:"", s_abilitydes:"", h_abilitydes:"", description:""})


        const [open, setOpen] = useState(false);

        const handleClick = () => {
            setOpen(true);
        };

        const handleClose = (event, reason) => {
            setOpen(false);
        };

        Title("PokeFound | ","New")

        const info= null

        const dispatch = useDispatch()
        const navigate = useNavigate()
    
        const handleChange = ({target}) => {
            setData({
                ...data,
                [target.name]: target.value
            })
            
        }

        

        const handleSubmit = (e)=>{
            e.preventDefault();

            if(data.type === data.s_type){
                handleClick()
            }else{

            

                let lista =[{effect: data.abilitydes, name: data.ability}, {effect: data.s_abilitydes, name: data.s_ability},{effect: data.h_abilitydes, name: data.h_ability}]

                const filter = ""

                let final = lista.filter(y=> {
                    return y.name != filter
                } )

                let form = {
                    name: data.name.toLowerCase().replace(/ /g, "-"),
                    img: data.preview,
                    imagen: data.artwork,
                    type: data.type,
                    sectype: data.s_type,
                    weight: data.weight,
                    height: data.heigth,
                    pokedescripcion: data.description,
                    abilitiesdes: final,
                    stats: [{base_stat: data.hp},{base_stat: data.attack},{base_stat: data.defense},{base_stat: data.s_attack},{base_stat: data.s_defense},{base_stat: data.speed}]
                }
                dispatch(NewPokemon(form))
                navigate("/home")
                
                console.log(form)
            }
        }

        

    return (
        <div>
            <Top/>

                <div className='container fuente'>
                    <Button variant="outlined" color="primary" onClick={()=>{navigate(-1)}}>
                    Go back
                    </Button>
                    


                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }} variant="filled">
                        The pokemon cannot repeat its type!
                    </Alert>
                    </Snackbar>
                    
                    
                    <div className='append'>

                        <Form
                            handleSubmit={handleSubmit}
                            handleChange={handleChange}
                            data={data}     
                            info={info}                   
                        />

                        <div className='activo'>

                            <div className='texto-preview'>
                                <h5>Preview</h5>

                                <Card
                                    name={data.name}
                                    image={data.preview}
                                    type={data.type}
                                    sectype={data.s_type}
                                    id={null}
                                    weight={data.weight}
                                    height={data.heigth}
                                />

                                <div className='pokeinfo miniatura'> 
                                    <img src={data.artwork}></img>
                                </div>

                                <div className='centrado'>
                                    <div className='fuente  descripcion parrafo'>
                                        <p>{data.description}</p>
                                    </div>
                                </div>

                                <StatsS
                                    stats={data}
                                />

                            </div>
                        </div>
                    </div>

                </div>

            <Footer/>
        </div>
  )
}

