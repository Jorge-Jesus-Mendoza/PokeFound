import React from 'react'
import { Top } from '../components/Top'
import { Footer } from "../components/Footer";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Card from "../components/Card";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Title } from '../components/Functions';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { PokeEdit } from '../actions/PokeEdit';
import { Loading } from '../components/Loading';
import { Changedata } from '../actions/Changedata';
import { Form } from '../components/Form';
import { StatsS } from '../components/StatsS';
import Button from '@mui/material/Button';
import Url from "../config/Url";
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const EditPokemon = () => {

        const [data, setData] = useState({name: "", type: "", s_type:null, artwork:"", preview:"", weight:0, heigth:0, attack:0, defense:0, hp:0, speed:0, s_attack:0, s_defense:0, ability:"", s_ability:"", h_ability:"", abilitydes:"", s_abilitydes:"", h_abilitydes:"", description:""})

        const info = useSelector(Store => Store.PerfilReducer.pokemon)
        const name = useSelector(Store => Store.PerfilReducer.name)
        const weight = useSelector(Store => Store.PerfilReducer.weight)
        const height = useSelector(Store => Store.PerfilReducer.height)
        const image = useSelector(Store => Store.PerfilReducer.image)
        const img = useSelector(Store => Store.PerfilReducer.img)
        const type = useSelector(Store => Store.PerfilReducer.type)
        const segtype= useSelector(Store => Store.PerfilReducer.segtype)
        const abilitiesdes= useSelector(Store => Store.PerfilReducer.abilitiesdes)
        const pokedescription= useSelector(Store => Store.PerfilReducer.pokedescription)
        const stats= useSelector(Store => Store.PerfilReducer.stats)

        const update= useSelector(Store => Store.Asignador_data.update)
        

        const params = useParams()

        const [open, setOpen] = useState(false);
        const [open2, setOpen2] = useState(false);

        const handleClick = () => {
            setOpen(true);
        };

        const handleClose = (event, reason) => {
            setOpen(false);
        };


        const handleClick2 = () => {
            setOpen2(true);
        };

        const handleClose2 = (event, reason) => {
            setOpen2(false);
        };
        
        

        const dispatch = useDispatch()
        const navigate = useNavigate()
    
        const handleChange = ({target}) => {
            setData({
                ...data,
                [target.name]: target.value
            })
            
        }
        
        
        useEffect(()=>{
            dispatch(PokeEdit(`${Url}/${params.id}`));
            console.log(!update);

            
            window.scrollTo(0, 0)

        },[params.id],useSelector(Store => Store.Asignador_data.update))

        Title("Edit | ", "")

        const handleSubmit = (e)=>{
            e.preventDefault();

            if(type === segtype){
                handleClick()
            }else{

                let lista = null
                let filter = ""
                let final = null
                let form = null
                let second_type = null

                if (segtype !== filter){
                    second_type = segtype
                }

                switch(abilitiesdes.length){

                    
                    case 1:
                        lista =[{effect: abilitiesdes[0].effect, name: abilitiesdes[0].name}, {effect: data.s_abilitydes, name: data.s_ability},{effect: data.h_abilitydes, name: data.h_ability}]


                        final = lista.filter(y=> {
                            return y.name != filter 
                        } )

                        

                        form = {
                            name: name.toLowerCase().replace(/ /g, "-"),
                            img: img,
                            imagen: image,
                            type: type,
                            sectype: second_type,
                            weight: weight,
                            height: height,
                            pokedescripcion: pokedescription,
                            abilitiesdes: final,
                            stats: [{base_stat: stats[0].base_stat},{base_stat: stats[1].base_stat},{base_stat: stats[2].base_stat},{base_stat: stats[3].base_stat},{base_stat: stats[4].base_stat},{base_stat: stats[5].base_stat}]
                        }
                        
                        console.log(form)
                        dispatch(Changedata(form, params.id, !update))
                        handleClick2()

                    case 2:
                        lista =[{effect: abilitiesdes[0].effect, name: abilitiesdes[0].name}, {effect: abilitiesdes[1].effect, name: abilitiesdes[1].name},{effect: data.h_abilitydes, name: data.h_ability}]


                        final = lista.filter(y=> {
                            return y.name != filter 
                        } )

                        

                        form = {
                            name: name.toLowerCase().replace(/ /g, "-"),
                            img: img,
                            imagen: image,
                            type: type,
                            sectype: second_type,
                            weight: weight,
                            height: height,
                            pokedescripcion: pokedescription,
                            abilitiesdes: final,
                            stats: [{base_stat: stats[0].base_stat},{base_stat: stats[1].base_stat},{base_stat: stats[2].base_stat},{base_stat: stats[3].base_stat},{base_stat: stats[4].base_stat},{base_stat: stats[5].base_stat}]
                        }
                        console.log(form)
                        dispatch(Changedata(form, params.id, !update))
                        handleClick2()

                    case 3:
                        lista =[{effect: abilitiesdes[0].effect, name: abilitiesdes[0].name}, {effect: abilitiesdes[1].effect, name: abilitiesdes[1].name},{effect: abilitiesdes[2].effect, name: abilitiesdes[2].name}]


                        final = lista.filter(y=> {
                            return y.name != filter 
                        } )

                        form = {
                            name: name.toLowerCase().replace(/ /g, "-"),
                            img: img,
                            imagen: image,
                            type: type,
                            sectype: second_type,
                            weight: weight,
                            height: height,
                            pokedescripcion: pokedescription,
                            abilitiesdes: final,
                            stats: [{base_stat: stats[0].base_stat},{base_stat: stats[1].base_stat},{base_stat: stats[2].base_stat},{base_stat: stats[3].base_stat},{base_stat: stats[4].base_stat},{base_stat: stats[5].base_stat}]
                        }
                        console.log(form)
                        dispatch(Changedata(form, params.id, !update))
                        handleClick2()
                }
                
                
            }   
        }
        
  return (
    <div>
        <Top/>
        

            <div className='container fuente'>
                

                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }} variant="filled">
                        The pokemon cannot repeat its type!
                    </Alert>
                </Snackbar>

                <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose2}>
                    <Alert onClose={handleClose2} severity="success" sx={{ width: '100%' }} variant="filled">
                        The pokemon has been succesfully updated!
                    </Alert>
                </Snackbar>
                
                
                
                {info != null ? (

                    

                    Title("Edit | ", info.name),
                    
                    <>
                        <Button variant="outlined" color="primary" onClick={()=>{navigate(-1)}}>
                            <ArrowBackIcon/>
                        </Button>
                        <div className='append'>

                            <Form
                                handleSubmit={handleSubmit}
                                handleChange={handleChange}
                                name={name}
                                data={data}     
                                info={info} 
                                image={image}
                                img={img}
                                weight={ Math.round(weight ) }
                                height={Math.round(height ) }
                                pokedescription={pokedescription}
                                abilitiesdes={abilitiesdes} 
                                stats={stats}
                            />

                            

                            <div className='activo'>

                                <div className='texto-preview'>
                                    <h5>Preview</h5>
                                    <Card
                                        name={name}
                                        image={img}
                                        type={type}
                                        sectype={segtype}
                                        id={info.id}
                                        weight={Math.round(weight) }
                                        height={Math.round(height) }
                                    
                                    />
                                    <div className='pokeinfo miniatura'> 
                                        <img src={image}></img>
                                    </div>

                                    <div className='centrado'>
                                        <div className='fuente  descripcion parrafo'>
                                            <p>{pokedescription}</p>
                                        </div>
                                    </div>

                                    <StatsS
                                        stats={stats}
                                    />

                                </div>
                            </div>
                        </div>
                    </>
                ): (<Loading/>)}


            </div>
        <Footer/>
        </div>
  )
}
