import React from "react";
import { MainTitle } from "../components/Functions";
import Card from "../components/Card";
import Top from "../components/Top";
import {Loading} from "../components/Loading";
import  Footer  from "../components/Footer";
import ReactPaginate from "react-paginate";
import { Pokelist } from "../actions/Pokelist";
import { Listurl } from "../actions/Listurl";
import { Setselecter } from "../actions/Setselecter";
import { DeletePokemon } from "../actions/DeletePokemon";
import Button from '@mui/material/Button'
import { Link } from "react-router-dom";
import FormControl from '@mui/material/FormControl'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import { Filter } from "../actions/Filter";
import { Reload } from "../actions/Reload";
import { SetTypetoFilter } from "../actions/SetTypetoFilter";
import { SetsecondTypetoFilter } from "../actions/SetsecondTypetoFilter";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField'
import {connect} from 'react-redux';

class Home extends React.Component{
    state = {
        filter: "",
        secFilter: "",
        open: false,
        open2: false
    }

    handleClick = () => {
        this.setState({
            open: true
        })
    };

    handleClose = () => {
        this.setState({
            open: false
        })
    };

    handleClick2 = () => {
        this.setState({
            open2: true
        })
    };

    handleClose2 = (event, reason) => {
        this.setState({
            open2: false
        })
    };

    componentDidMount() {

        this.props.Pokelist(this.props.data.url,this.props.data.filter,this.props.data.type,this.props.data.sectype);
        MainTitle();
        window.scrollTo(0, 0);
        
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.data.update !== this.props.data.update || prevProps.data.totalpokemon !== this.props.data.totalpokemon) {
            this.props.Pokelist(this.props.data.url,this.props.data.filter,this.props.data.type,this.props.data.sectype);
            window.scrollTo(0, 0);
        }
      }

    handlefilter = (value)=>{
        this.setState({
            filter: value
        })
        
    }
    handlesecondfilter = (value) =>{
        this.setState({
            secFilter: value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        if(this.state.filter === "" || this.state.filter === null){
            this.handleClick()
        }else{
            if(this.state.filter === this.state.secFilter){
                this.handleClick2() 
            }else{
                this.props.SetTypetoFilter(this.state.filter)
                this.props.SetsecondTypetoFilter(this.state.secFilter)
                this.props.Filter(true)
                this.props.Reload(!this.props.data.update)
                this.setState({
                    filter: null
                })
                this.setState({
                    secFilter: null
                })
            }
        }
    }

    handlereset = () =>{
        this.props.Filter(false)
        this.props.SetTypetoFilter(null)
        this.props.SetsecondTypetoFilter("")
        this.props.Reload(!this.props.data.update)
    }

    handlepageclick =(data)=>{
        let target = data.selected + 1
        let inicio = target * 20 - 20
        let inicio2= inicio + 20
        this.props.Listurl(inicio,inicio2,this.props.data.filter,this.props.data.type)
        this.props.Setselecter(data.selected)
        this.props.Reload(!this.props.data.update)
        
    }

    render(){
        const types = ["grass","poison","water","fire","bug","normal","electric","ground","fighting","psychic","rock","ghost","ice","dragon","dark","steel","flying","fairy"]
        return(
            <div >
                <Top/>
                <div className="container">

                    <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
                        <Alert onClose={this.handleClose} severity="warning" sx={{ width: '100%' }} variant="filled">
                            You must select a type first!
                        </Alert>
                    </Snackbar>

                    <Snackbar open={this.state.open2} autoHideDuration={6000} onClose={this.handleClose2}>
                        <Alert onClose={this.handleClose2} severity="warning" sx={{ width: '100%' }} variant="filled">
                            You have selected the same type twice!
                        </Alert>
                    </Snackbar>
                    

                    <div className="contiene">
                        
                        {this.props.data.imgs != null ? (
                            <>
                                {this.props.data.imgs.length > 0 ? (

                                <>
                                    <div className="filter">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="filter-content">
                                                <div className="mx-3 filters">
                                                    <FormControl className='my-2' fullWidth>
                                                        
                                                        <Autocomplete
                                                            disablePortal
                                                            id="type"
                                                            name="type"
                                                            options={types}
                                                            sx={{ width: 140 }}
                                                            onChange={(event,value)=> this.handlefilter(value)}
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
                                                            onChange={(event,value)=> this.handlesecondfilter(value)}
                                                            renderInput={(params) => <TextField {...params} label="Second Type" variant='standard'
                                                            />}
                                                        />

                                                    </FormControl>
                                                    
                                                </div>
                                            

                                                <div>
                                                    <Button variant="contained" color="success" type='submit'>
                                        
                                                        Filter
                                                    </Button>

                                                    <Button variant="contained" className="mx-2" color="success" onClick={this.handlereset}>
                                                        Remove filter
                                                    </Button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                
                                    <div className="grid-template">
                                        {this.props.data.imgs.map(pokemon=>(
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
                                                        <Button variant="contained" color="error" onClick={()=> this.props.DeletePokemon(pokemon.id)}>Delete
                                                    
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
                                            <form onSubmit={this.handleSubmit}>
                                                <div className="filter-content">
                                                    <div className="mx-3 filters">
                                                        <FormControl className='my-2' fullWidth>
                                                            
                                                            <Autocomplete
                                                                disablePortal
                                                                id="type"
                                                                name="type"
                                                                options={types}
                                                                sx={{ width: 140 }}
                                                                onChange={(event,value)=> this.handlefilter(value)}
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
                                                                onChange={(event,value)=> this.handlesecondfilter(value)}
                                                                renderInput={(params) => <TextField {...params} label="Second Type" variant='standard'
                                                                />}
                                                            />
                                                        </FormControl>
                                                        
                                                    </div>
                                                

                                                    <div>
                                                        <Button variant="contained" color="success" type='submit'>
                                            
                                                            Filter
                                                        </Button>

                                                        <Button variant="contained" className="mx-2" color="success" onClick={this.handlereset}>
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
                            this.props.data.filter === false ? (

                            
                
                            <ReactPaginate

                                breakLabel={"..."}
                                nextLabel="next >"                    
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={1}
                                pageCount={Math.ceil(this.props.data.totalpokemon/20)}
                                previousLabel="< previous"
                                onPageChange={this.handlepageclick}
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
                                initialPage={this.props.data.selected}
                                
                            />
                        ) : (<></>)
                        }

                    </div>
                    
                </div>
                <Footer/>
                
            </div>
        )
    }
}

const mapDispatchtopProps ={ Pokelist, Listurl, Setselecter, DeletePokemon, Filter, Reload, SetTypetoFilter, SetsecondTypetoFilter}


const mapStatetopProps =(state)=>{
    return{
        data: state.Asignador_data
    }
  }

export default connect(mapStatetopProps, mapDispatchtopProps)(Home) 

