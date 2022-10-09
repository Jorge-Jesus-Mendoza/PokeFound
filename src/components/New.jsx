import React from 'react'
import { Top } from './Top'
import { Footer } from "./Footer";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Card from "./Card";
import { useDispatch } from 'react-redux';
import { NewPokemon } from '../actions/NewPokemon';
import { useNavigate } from 'react-router-dom';
import { MainTitle } from './Funciones';


export const New = () => {

        const [data, setData] = useState({name: "", type: "", s_type:null, artwork:"", preview:"", weight:0, heigth:0, attack:0, defense:0, hp:0, speed:0, s_attack:0, s_defense:0, ability:"", s_ability:"", h_ability:"", abilitydes:"", s_abilitydes:"", h_abilitydes:"", description:""})

        MainTitle("PokeFound | Create Pokemon")

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
            navigate("/inicio")
            console.log(form)
        }

    
    
  return (
    <div>
        <Top/>
        

            <div className='container fuente'>

                

                <div className='append'>
                    

                        <form onSubmit={handleSubmit}>
                            <h5 className='fuente centrado'>Enter the new pokemon data</h5>
                            <div className='centrado my-5 mx-5 formulario'>
                                <div>
                                    

                                    <div className='acomodar my-3'>
                                        <label htmlFor="">Type</label>
                                        <select required name="type" id="" onChange={handleChange}>

                                            <option value="" disabled selected>Pokemon type</option>
                                            <option value="grass">grass</option>
                                            <option value="poison">poison</option>
                                            <option value="water">water</option>
                                            <option value="fire">fire</option>
                                            <option value="bug">bug</option>
                                            <option value="normal">normal</option>
                                            <option value="electric">electric</option>
                                            <option value="ground">ground</option>
                                            <option value="fighting">fighting</option>
                                            <option value="psychic">psychic</option>
                                            <option value="rock">rock</option>
                                            <option value="ghost">ghost</option>
                                            <option value="ice">ice</option>
                                            <option value="dragon">dragon</option>
                                            <option value="dark">dark</option>
                                            <option value="steel">steel</option>
                                            <option value="flying">flying</option>

                                        </select> 
                                    </div>

                                    <div className='acomodar my-3'>
                                        <label htmlFor="">Second type</label>
                                        <select required name="s_type" id="" onChange={handleChange}>

                                            <option value={null} disabled selected>Second type</option>
                                            <option value="grass">grass</option>
                                            <option value="poison">poison</option>
                                            <option value="water">water</option>
                                            <option value="fire">fire</option>
                                            <option value="bug">bug</option>
                                            <option value="normal">normal</option>
                                            <option value="electric">electric</option>
                                            <option value="ground">ground</option>
                                            <option value="fighting">fighting</option>
                                            <option value="psychic">psychic</option>
                                            <option value="rock">rock</option>
                                            <option value="ghost">ghost</option>
                                            <option value="ice">ice</option>
                                            <option value="dragon">dragon</option>
                                            <option value="dark">dark</option>
                                            <option value="steel">steel</option>
                                            <option value="flying">flying</option>
                                            
                                        </select> 
                                    </div>

                                    

                                    <div className='acomodar my-3'>
                                        <label htmlFor="">Name</label><input required type="text" onChange={handleChange} placeholder="Pokemon name" name="name" value={data.name}/>
                                    </div>

                                    <div className='acomodar my-3'>
                                        <label htmlFor="">Preview</label><input required type="text" onChange={handleChange} placeholder="Image Link" name="preview" value={data.preview}/>
                                    </div>

                                    <div className='acomodar my-3'>
                                        <label htmlFor="">Artwork</label><input required type="text" onChange={handleChange} placeholder="Image Link" name="artwork" value={data.artwork}/>
                                    </div>

                                    <div className='acomodar my-3'>
                                        <label htmlFor="">Weight</label><input required type="number" onChange={handleChange} value={data.weight} name="weight"/>
                                    </div>

                                    <div className='acomodar my-3'>
                                        <label htmlFor="">Heigth</label><input required type="number" onChange={handleChange} name="heigth" value={data.heigth}/>
                                    </div>

                                    <div className='acomodar my-3'>
                                        <label htmlFor="">Ability 1</label><input required type="text" onChange={handleChange}  placeholder="First ability name" name="ability" value={data.ability}/>
                                    </div>


                                    <div className='my-3 centrado'>

                                        <textarea id="abilitydes" required cols="30" rows="10" onChange={handleChange} name="abilitydes" value={data.abilitydes} placeholder="First Ability description"></textarea>
                                        
                                    </div>

                                    <div className='acomodar my-3'>
                                        <label htmlFor="">Ability 2</label><input type="text" onChange={handleChange}  placeholder="Second ability name" name="s_ability" value={data.s_ability}/>
                                    </div>

                                    <div className='my-3 centrado'>

                                        <textarea id="s_abilitydes" cols="30" rows="10" onChange={handleChange} name="s_abilitydes" value={data.s_abilitydes} placeholder="Second Ability description"></textarea>
                                        
                                    </div>

                                    <div className='acomodar my-3'>
                                        <label htmlFor="">Ability H</label><input type="text" onChange={handleChange}  placeholder="Hidden ability name" name="h_ability" value={data.h_ability}/>
                                    </div>

                                    <div className='my-3 centrado'>

                                        <textarea id="h_abilitydes" cols="30" rows="10" onChange={handleChange} name="h_abilitydes" value={data.h_abilitydes} placeholder="Hidden Ability description"></textarea>
                                        
                                    </div>
                                    


                                    


                                    

                                    
                                </div>

                                <div className='status mx-5'>

                                    <div className='acomodar  mx-3'>
                                        <label htmlFor="">HP</label><input className='caracter' required type="number" value={data.hp} onChange={handleChange} name="hp"/>
                                    </div>
                                    

                                

                                    <div className='acomodar my-2 mx-3'>
                                        <label htmlFor="">Attack</label><input className='caracter'  required type="number" value={data.attack} onChange={handleChange} name="attack"/>
                                    </div>
                                    

                                

                                    <div className='acomodar my-3 mx-3'>
                                        <label htmlFor="">Defense</label><input className='caracter'  required type="number" value={data.defense} onChange={handleChange} name="defense"/>
                                    </div>
                                    

                                

                                    <div className='acomodar my-3 mx-3'>
                                        <label htmlFor="">Speed</label><input className='caracter'  required type="number" value={data.speed} onChange={handleChange} name="speed"/>
                                    </div>
                                    

                                

                                    <div className='acomodar my-3 mx-3'>
                                        <label htmlFor="">S_Attack</label><input className='caracter'  required type="number" value={data.s_attack} onChange={handleChange} name="s_attack"/>
                                    </div>
                                     

                                

                                    <div className='acomodar my-3 mx-3'>
                                        <label htmlFor="">S_Defense</label><input className='caracter'  required type="number" value={data.s_defense} onChange={handleChange} name="s_defense"/>
                                    </div>

                                    <div className='my-3 centrado'>

                                        <textarea name="description" id="description" required cols="20" rows="10" onChange={handleChange} value={data.description} placeholder="Pokemon Description"></textarea>
                                        
                                    </div>
                                    

                                </div>



                                
                            </div>
                            <div className='centrado'>
                                <button type='submit' className='btn btn-success'>Save New Pokemon</button>
                            </div>
                        </form>

                    

                    <div className='activo'>

                        <div className='texto-preview'>
                            <h5>Preview</h5>
                            <Card
                                nombre={data.name}
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

                            <div className="stats2 fuente">
                                <div className="centrado">
                                    <table>
                                        <tbody>

                                        
                                            <tr>
                                                <th className="stats-m">Hp</th>
                                                <th className="stats-m">Att</th>
                                                <th className="stats-m">Def</th>
                                                <th className="stats-m">s-att</th>
                                                <th className="stats-m">s-def</th>
                                                <th className="stats-m">Speed</th>   
                                            </tr>
                                            <tr>
                                                <td className="stats-d">{data.hp}</td>
                                                <td className="stats-d">{data.attack}</td>
                                                <td className="stats-d">{data.defense}</td>
                                                <td className="stats-d">{data.s_attack}</td>
                                                <td className="stats-d">{data.s_defense}</td>
                                                <td className="stats-d">{data.speed}</td>
                                                
                                            </tr>
                                        
                                        </tbody>
                                    </table>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        <Footer/>
        </div>
  )
}

