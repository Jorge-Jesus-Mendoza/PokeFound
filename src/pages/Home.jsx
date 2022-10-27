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
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import InputLabel from '@mui/material/InputLabel'
import FormHelperText from '@mui/material/FormHelperText'
import { useState } from "react";
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import { Filter } from "../actions/Filter";
import { Reload } from "../actions/Reload";
import { SetTypetoFilter } from "../actions/SetTypetoFilter";


 
const Home =()=>{

    const url = useSelector(Store => Store.Asignador_data.url)
    const pokemons = useSelector(Store => Store.Asignador_data.imgs)
    const totalpokemon = useSelector(Store => Store.Asignador_data.totalpokemon)
    const trigger = useSelector(Store => Store.Asignador_data.filter)
    const update = useSelector(Store => Store.Asignador_data.update)
    const type = useSelector(Store => Store.Asignador_data.type)
    const selected = useSelector(Store => Store.Asignador_data.selected)
    const dispatch = useDispatch()
    const [filter, SetFilter] = useState("")

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    useEffect(()=>{
        
        dispatch(Pokelist(url,trigger,type));
        window.scrollTo(0, 0)
        
    },[url, useSelector(Store => Store.Asignador_data.totalpokemon), update])

    const handlefilter = ({target})=>{
        SetFilter(target.value)
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(filter === ""){
            handleClick()
        }else{
            dispatch(SetTypetoFilter(filter))
            dispatch(Filter(true))
            dispatch(Reload(!update))
        }
    }
    const handlereset = () =>{
        dispatch(Filter(false))
        dispatch(Reload(!update))
    }


    const handlepageclick =(data)=>{
        let target = data.selected + 1
        let inicio = target * 20 - 20
        let inicio2= inicio + 20
        dispatch(Listurl(inicio,inicio2,trigger,type))
        dispatch(Setselecter(data.selected))
        
    }

    MainTitle()
    
    return (

        <div >
            <Top/>
            <div className="container">

                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }} variant="filled">
                        You must select a type first!
                    </Alert>
                </Snackbar>
                

                <div className="contiene">
                    
                    {pokemons != null ? (
                        <>
                            <div className="filter">
                                <form onSubmit={handleSubmit}>
                                    <div className="filter-content">
                                        <div className="mx-3">
                                            <FormControl className='my-2'>
                                                
                                                <InputLabel variant='standard' id="type">Type</InputLabel>
                                                <Select
                                                    labelId="type"
                                                    id="type"
                                                    name="type"
                                                    // value={age}
                                                    label="Type"
                                                    onChange={handlefilter} 
                                                    variant='standard'
                                                >
                                                    <MenuItem value="grass">grass</MenuItem>
                                                    <MenuItem value="poison">poison</MenuItem>
                                                    <MenuItem value="water">water</MenuItem>
                                                    <MenuItem value="fire">fire</MenuItem>
                                                    <MenuItem value="bug">bug</MenuItem>
                                                    <MenuItem value="normal">normal</MenuItem>
                                                    <MenuItem value="electric">electric</MenuItem>
                                                    <MenuItem value="ground">ground</MenuItem>
                                                    <MenuItem value="fighting">fighting</MenuItem>
                                                    <MenuItem value="psychic">psychic</MenuItem>
                                                    <MenuItem value="rock">rock</MenuItem>
                                                    <MenuItem value="ghost">ghost</MenuItem>
                                                    <MenuItem value="ice">ice</MenuItem>
                                                    <MenuItem value="dragon">dragon</MenuItem>
                                                    <MenuItem value="dark">dark</MenuItem>
                                                    <MenuItem value="steel">steel</MenuItem>
                                                    <MenuItem value="flying">flying</MenuItem>
                                                    <MenuItem value="fairy">fairy</MenuItem>
                                                </Select>
                                                <FormHelperText>Filter list by pokemon type</FormHelperText>
                                            </FormControl>
                                        </div>
                                    

                                        <div>
                                            <Button variant="contained" color="success" type='submit'>
                                
                                                Filter
                                            </Button>

                                            <Button variant="contained" className="mx-2" color="success" onClick={handlereset}>
                                                Remove filter
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        
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
                        </>
                    ) : (<div>
                            <Loading/>
                            <div className="rellenando"></div>
                        </div>)}

                    {
                        trigger === false ? (

                        
            
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
                            initialPage={selected}
                            
                        />
                    ) : (<></>)
                    }

                </div>
                
            </div>
            <Footer/>
            
        </div>

    )
}

export default Home;
