import React from 'react'
import Top from '../components/Top'
import  Footer  from "../components/Footer";
import Card from "../components/Card";
import { NewPokemon } from '../actions/NewPokemon';
import {Title } from '../components/Functions';
import { StatsE } from '../components/StatsE';
import { Form2 } from '../components/Form2';
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { withRouter } from '../components/Withrouter'
import {connect} from 'react-redux';

class Test extends React.Component{
    state={
        data: {name: "", type: "", s_type:null, artwork:"", preview:"", weight:0, heigth:0, attack:0, defense:0, hp:0, speed:0, s_attack:0, s_defense:0, ability:"", s_ability:"", h_ability:"", abilitydes:"", s_abilitydes:"", h_abilitydes:"", description:""},
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

    handleChange = ({target}) => {
        this.setState({
            data: {
                ...this.state.data,
                [target.name]: target.value
            }
            
        })
        
    }
    handleChange2 = (value) => {

        this.setState({
            data: {
                ...this.state.data,
                type: value
            }
            
        })
        
    }

    handleChange3 = (value) => {

        this.setState({
            data: {
                ...this.state.data,
                s_type: value
            }
            
        })
        
    }

    handleSubmit = (e)=>{
        e.preventDefault();

        if(this.state.data.type === this.state.data.s_type){
            this.handleClick()
        }else{

        

            let lista =[{effect: this.state.data.abilitydes, name: this.state.data.ability}, {effect: this.state.data.s_abilitydes, name: this.state.data.s_ability},{effect: this.state.data.h_abilitydes, name: this.state.data.h_ability}]

            const filter = ""

            let final = lista.filter(y=> {
                return y.name !== filter
            } )

            let form = {
                name: this.state.data.name.toLowerCase().replace(/ /g, "-"),
                img: this.state.data.preview,
                imagen: this.state.data.artwork,
                type: this.state.data.type,
                sectype: this.state.data.s_type,
                weight: this.state.data.weight,
                height: this.state.data.heigth,
                pokedescripcion: this.state.data.description,
                abilitiesdes: final,
                stats: [{base_stat: this.state.data.hp},{base_stat: this.state.data.attack},{base_stat: this.state.data.defense},{base_stat: this.state.data.s_attack},{base_stat: this.state.data.s_defense},{base_stat: this.state.data.speed}]
            }
            this.props.NewPokemon(form)
            this.handleClick2()
            
            console.log(form)
        }
    }

    render(){
        Title("PokeFound | ","New")
        const info = null
        return(
            <div>
                <Top/>

                    <div className='container fuente'>
                        <Button variant="outlined" color="primary" onClick={()=>{this.props.navigation(-1)}}>
                            <ArrowBackIcon/>
                        </Button>
                        


                        <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
                            <Alert onClose={this.handleClose} severity="warning" sx={{ width: '100%' }} variant="filled">
                                The pokemon cannot repeat its type!
                            </Alert>
                        </Snackbar>

                        <Snackbar open={this.state.open2} autoHideDuration={6000} onClose={this.handleClose2}>
                            <Alert onClose={this.handleClose2} severity="success" sx={{ width: '100%' }} variant="filled">
                                {this.state.data.name} has been succesfully added!
                            </Alert>
                        </Snackbar>
                        
                        
                        <div className='append'>

                            <Form2
                                handleSubmit={this.handleSubmit}
                                handleChange={this.handleChange}
                                handleChange2={this.handleChange2}
                                handleChange3={this.handleChange3}
                                data={this.state.data}     
                                info={info}                   
                            />

                            <div className='activo'>

                                <div className='texto-preview'>
                                    <h5>Preview</h5>

                                    <Card
                                        name={this.state.data.name}
                                        image={this.state.data.preview}
                                        type={this.state.data.type}
                                        sectype={this.state.data.s_type}
                                        id={null}
                                        weight={this.state.data.weight}
                                        height={this.state.data.heigth}
                                    />

                                    <div className='pokeinfo miniatura'> 
                                        <img src={this.state.data.artwork} alt=""></img>
                                    </div>

                                    <div className='centrado'>
                                        <div className='fuente  descripcion parrafo'>
                                            <p>{this.state.data.description}</p>
                                        </div>
                                    </div>

                                    <StatsE
                                        stats={this.state.data}
                                    />

                                </div>
                            </div>
                        </div>

                    </div>

                <Footer/>
            </div>
        )
    }
}

const mapDispatchtopProps ={NewPokemon}

export default connect(null, mapDispatchtopProps)(withRouter(Test)) 


