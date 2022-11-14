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
import InputLabel from '@mui/material/InputLabel'
import FormHelperText from '@mui/material/FormHelperText'
import { useState } from "react";
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import { Filter } from "../actions/Filter";
import { Reload } from "../actions/Reload";
import { SetTypetoFilter } from "../actions/SetTypetoFilter";
import { SetsecondTypetoFilter } from "../actions/SetsecondTypetoFilter";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField'


 
const Home =()=>{

    const url = useSelector(Store => Store.Asignador_data.url)
    const pokemons = useSelector(Store => Store.Asignador_data.imgs)
    const totalpokemon = useSelector(Store => Store.Asignador_data.totalpokemon)
    const trigger = useSelector(Store => Store.Asignador_data.filter)
    const update = useSelector(Store => Store.Asignador_data.update)
    const type = useSelector(Store => Store.Asignador_data.type)
    const sectype = useSelector(Store => Store.Asignador_data.sectype)
    const selected = useSelector(Store => Store.Asignador_data.selected)
    const dispatch = useDispatch()
    const [filter, SetFilter] = useState("")
    const [secFilter, SetsecFilter] = useState("")

    const types = ["grass","poison","water","fire","bug","normal","electric","ground","fighting","psychic","rock","ghost","ice","dragon","dark","steel","flying","fairy"]
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClick2 = () => {
        setOpen2(true);
    };

    const handleClose2 = (event, reason) => {
        setOpen2(false);
    };
    
    useEffect(()=>{
        
        dispatch(Pokelist(url,trigger,type,sectype));
        window.scrollTo(0, 0)
        
    },[url, totalpokemon, update])

    const handlefilter = (value)=>{
        SetFilter(value)
        
    }
    const handlesecondfilter = (value) =>{
        SetsecFilter(value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(filter === "" || filter === null){
            handleClick()
        }else{
            if(filter === secFilter){
                handleClick2() 
            }else{
                dispatch(SetTypetoFilter(filter))
                dispatch(SetsecondTypetoFilter(secFilter))
                dispatch(Filter(true))
                dispatch(Reload(!update))
                SetFilter(null)
                SetsecFilter(null)
            }
        }
    }

    const handlereset = () =>{
        dispatch(Filter(false))
        dispatch(SetTypetoFilter(null))
        dispatch(SetsecondTypetoFilter(""))
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

                <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose2}>
                    <Alert onClose={handleClose2} severity="warning" sx={{ width: '100%' }} variant="filled">
                        You have selected the same type twice!
                    </Alert>
                </Snackbar>
                

                <div className="contiene">
                    
                    {pokemons != null ? (
                        <>
                            {pokemons.length > 0 ? (

                            <>
                                <div className="filter">
                                    <form onSubmit={handleSubmit}>
                                        <div className="filter-content">
                                            <div className="mx-3 filters">
                                                <FormControl className='my-2' fullWidth>
                                                    
                                                    <Autocomplete
                                                        disablePortal
                                                        id="type"
                                                        name="type"
                                                        options={types}
                                                        sx={{ width: 140 }}
                                                        onChange={(event,value)=> handlefilter(value)}
                                                        renderInput={(params) => <TextField {...params} label="First Type" variant='standard'
                                                        />}
                                                    />
                                                    
                                                </FormControl>


                                                <FormControl className='my-2 mx-2' fullWidth>
                                                    
                                                    <Autocomplete
                                                        disablePortal
                                                        id="sectype"
                                                        name="sectype"
                                                        options={types}
                                                        sx={{ width: 140 }}
                                                        onChange={(event,value)=> handlesecondfilter(value)}
                                                        renderInput={(params) => <TextField {...params} label="Second Type" variant='standard'
                                                        />}
                                                    />

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
                            ) : (
                                <>

                                    <div className="filter">
                                        <form onSubmit={handleSubmit}>
                                            <div className="filter-content">
                                                <div className="mx-3 filters">
                                                    <FormControl className='my-2' fullWidth>
                                                        
                                                        <Autocomplete
                                                            disablePortal
                                                            id="type"
                                                            name="type"
                                                            options={types}
                                                            sx={{ width: 140 }}
                                                            onChange={(event,value)=> handlefilter(value)}
                                                            renderInput={(params) => <TextField {...params} label="First Type" variant='standard'
                                                            />}
                                                        />
                                                        
                                                    </FormControl>


                                                    <FormControl className='my-2 mx-2' fullWidth>
                                                        
                                                        <Autocomplete
                                                            disablePortal
                                                            id="sectype"
                                                            name="sectype"
                                                            options={types}
                                                            sx={{ width: 140 }}
                                                            onChange={(event,value)=> handlesecondfilter(value)}
                                                            renderInput={(params) => <TextField {...params} label="Second Type" variant='standard'
                                                            />}
                                                        />
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


                                    <div className='container'>

                                        <div className='centrado error505 my-10'>

                                            <div className='error'>
                                            <img className='notfound' src="http://vignette1.wikia.nocookie.net/fantheories/images/c/ce/Artworks-000033957653-msh2uj-original.png/revision/latest?cb=20140619022320" alt="No results"></img>
                                            
                                            </div>

                                            <div className='error fuente'>
                                            <h1>No results</h1>
                                            </div>
                                        
                                        </div>
                                
                                    </div>
                                </>
                            
                            )}
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
