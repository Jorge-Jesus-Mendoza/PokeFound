import React from 'react'
import Top from '../components/Top'
import  Footer  from "../components/Footer";
import Card from "../components/Card";
import { Title } from '../components/Functions';
import { PokeEdit } from '../actions/PokeEdit';
import { Loading } from '../components/Loading';
import { Changedata } from '../actions/Changedata';
import Form from '../components/Form';
import { StatsS } from '../components/StatsS';
import Button from '@mui/material/Button';
import Url from "../config/Url";
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { withRouter } from '../components/Withrouter'
import {connect} from 'react-redux';

class EditPokemon extends React.Component{
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

    handleClose = (event, reason) => {
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
            open: false
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

    handleSubmit = (e)=>{
        e.preventDefault();

        if(this.props.info.type === this.props.info.segtype){
            this.handleClick()
        }else{

            let lista = null
            let filter = ""
            let final = null
            let form = null
            let second_type = null

            if (this.props.info.segtype !== filter){
                second_type = this.props.info.segtype
            }

            switch(this.props.info.abilitiesdes.length){

                
                case 1:
                    lista =[{effect: this.props.info.abilitiesdes[0].effect, name: this.props.info.abilitiesdes[0].name}, {effect: this.state.data.s_abilitydes, name: this.state.data.s_ability},{effect: this.state.data.h_abilitydes, name: this.state.data.h_ability}]


                    final = lista.filter(y=> {
                        return y.name !== filter 
                    } )

                    

                    form = {
                        name: this.props.info.name.toLowerCase().replace(/ /g, "-"),
                        img: this.props.info.img,
                        imagen: this.props.info.image,
                        type: this.props.info.type,
                        sectype: second_type,
                        weight: this.props.info.weight,
                        height: this.props.info.height,
                        pokedescripcion: this.props.info.pokedescription,
                        abilitiesdes: final,
                        stats: [{base_stat: this.props.info.stats[0].base_stat},{base_stat: this.props.info.stats[1].base_stat},{base_stat: this.props.info.stats[2].base_stat},{base_stat: this.props.info.stats[3].base_stat},{base_stat: this.props.info.stats[4].base_stat},{base_stat: this.props.info.stats[5].base_stat}]
                    }
                    
                    console.log(form)
                    console.log(!this.props.update)
                    this.props.Changedata(form, this.props.params.id, !this.props.update)
                    this.handleClick2()

                // eslint-disable-next-line no-fallthrough
                case 2:
                    lista =[{effect: this.props.info.abilitiesdes[0].effect, name: this.props.info.abilitiesdes[0].name}, {effect: this.props.info.abilitiesdes[1].effect, name: this.props.info.abilitiesdes[1].name},{effect: this.state.data.h_abilitydes, name: this.state.data.h_ability}]


                    final = lista.filter(y=> {
                        return y.name !== filter 
                    } )

                    

                    form = {
                        name: this.props.info.name.toLowerCase().replace(/ /g, "-"),
                        img: this.props.info.img,
                        imagen: this.props.info.image,
                        type: this.props.info.type,
                        sectype: second_type,
                        weight: this.props.info.weight,
                        height: this.props.info.height,
                        pokedescripcion: this.props.info.pokedescription,
                        abilitiesdes: final,
                        stats: [{base_stat: this.props.info.stats[0].base_stat},{base_stat: this.props.info.stats[1].base_stat},{base_stat: this.props.info.stats[2].base_stat},{base_stat: this.props.info.stats[3].base_stat},{base_stat: this.props.info.stats[4].base_stat},{base_stat: this.props.info.stats[5].base_stat}]
                    }
                    console.log(form)
                    console.log(!this.props.update)
                    this.props.Changedata(form, this.props.params.id, !this.props.update)
                    this.handleClick2()

                // eslint-disable-next-line no-fallthrough
                case 3:
                    lista =[{effect: this.props.info.abilitiesdes[0].effect, name: this.props.info.abilitiesdes[0].name}, {effect: this.props.info.abilitiesdes[1].effect, name: this.props.info.abilitiesdes[1].name},{effect: this.props.info.abilitiesdes[2].effect, name: this.props.info.abilitiesdes[2].name}]


                    final = lista.filter(y=> {
                        return y.name !== filter 
                    } )

                    form = {
                        name: this.props.info.name.toLowerCase().replace(/ /g, "-"),
                        img: this.props.info.img,
                        imagen: this.props.info.image,
                        type: this.props.info.type,
                        sectype: second_type,
                        weight: this.props.info.weight,
                        height: this.props.info.height,
                        pokedescripcion: this.props.info.pokedescription,
                        abilitiesdes: final,
                        stats: [{base_stat: this.props.info.stats[0].base_stat},{base_stat: this.props.info.stats[1].base_stat},{base_stat: this.props.info.stats[2].base_stat},{base_stat: this.props.info.stats[3].base_stat},{base_stat: this.props.info.stats[4].base_stat},{base_stat: this.props.info.stats[5].base_stat}]
                    }
                    console.log(form)
                    console.log(!this.props.update)
                    this.props.Changedata(form, this.props.params.id, !this.props.update)
                    this.handleClick2()

                // eslint-disable-next-line no-fallthrough
                default: return(null)
            }
            
            
        }   
    }

    componentDidMount() {

        Title("Edit | ", "");
        window.scrollTo(0, 0);
        this.props.PokeEdit(`${Url}/${this.props.params.id}`)
    }

    render(){

        return(
            <div>
                <Top/>
                

                    <div className='container fuente'>
                        

                        <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
                            <Alert onClose={this.handleClose} severity="warning" sx={{ width: '100%' }} variant="filled">
                                The pokemon cannot repeat its type!
                            </Alert>
                        </Snackbar>

                        <Snackbar open={this.state.open2} autoHideDuration={6000} onClose={this.handleClose2}>
                            <Alert onClose={this.handleClose2} severity="success" sx={{ width: '100%' }} variant="filled">
                                The pokemon has been succesfully updated!
                            </Alert>
                        </Snackbar>
                        
                        
                        
                        {this.props.info.pokemon !== null ? (

                            

                            Title("Edit | ", this.props.info.name),
                            
                            <>
                                <Button variant="outlined" color="primary" onClick={()=>{this.props.navigation(-1)}}>
                                    <ArrowBackIcon/>
                                </Button>
                                <div className='append'>

                                    <Form
                                        handleSubmit={this.handleSubmit}
                                        handleChange={this.handleChange}
                                        name={this.props.info.name}
                                        data={this.state.data}     
                                        info={this.props.info.pokemon} 
                                        image={this.props.info.image}
                                        img={this.props.info.img}
                                        weight={ Math.round(this.props.info.weight ) }
                                        height={Math.round(this.props.info.height ) }
                                        pokedescription={this.props.info.pokedescription}
                                        abilitiesdes={this.props.info.abilitiesdes} 
                                        stats={this.props.info.stats}
                                        type={this.props.info.type}
                                        segtype={this.props.info.segtype}
                                    />

                                    

                                    <div className='activo'>

                                        <div className='texto-preview'>
                                            <h5>Preview</h5>
                                            <Card
                                                name={this.props.info.name}
                                                image={this.props.info.img}
                                                type={this.props.info.type}
                                                sectype={this.props.info.segtype}
                                                id={this.props.info.id}
                                                weight={Math.round(this.props.info.weight) }
                                                height={Math.round(this.props.info.height) }
                                            
                                            />
                                            <div className='pokeinfo miniatura'> 
                                                <img src={this.props.info.image} alt="Pokemon Artwork"></img>
                                            </div>

                                            <div className='centrado'>
                                                <div className='fuente  descripcion parrafo'>
                                                    <p>{this.props.info.pokedescription}</p>
                                                </div>
                                            </div>

                                            <StatsS
                                                stats={this.props.info.stats}
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
}

const mapDispatchtopProps ={ PokeEdit, Changedata }


const mapStatetopProps =(state)=>{
    return{
        info: state.PerfilReducer,
        update: state.Asignador_data.update
    }
  }

export default connect(mapStatetopProps, mapDispatchtopProps)(withRouter(EditPokemon)) 

