import React from "react";
import { Title } from "../components/Functions";
import Top from "../components/Top";
import  Footer  from "../components/Footer";
import { Loading } from "../components/Loading";
import { Pokedata } from "../actions/Pokedata";
import { StatsL } from "../components/StatsL";
import { Skills } from "../components/Skills";
import { Pokeinfo } from "../components/Pokeinfo";
import Button from '@mui/material/Button'
import Url from "../config/Url"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { withRouter } from '../components/Withrouter'
import {connect} from 'react-redux';

class Pokemon extends React.Component{

    componentDidMount() {
        
        this.props.Pokedata(`${Url}?name=${this.props.params.name}`);
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <div >
                <Top/>
                <div className="container">
                    {this.props.data.pokemon != null ?(
                        Title('PokeFound | ', this.props.data.pokemon.name),
                        <>
                            <Button variant="outlined" color="primary" round onClick={()=>{this.props.navigation(-1)}}>
                                <ArrowBackIcon/>
                            </Button>
                                
                            <div className="informacion">
                                    
                                <Pokeinfo
                                    id={this.props.data.id}
                                    pokemon={this.props.data.pokemon}
                                    image={this.props.data.image}
                                    type={this.props.data.type}
                                    segtype={this.props.data.segtype}
                                    pokedescription={this.props.data.pokedescription}
                                    height={this.props.data.height}
                                    weight={this.props.data.weight}

                                />

                                <div className="stats fuente">
                                    <div className="centrado">

                                        <StatsL
                                            stats={this.props.data.pokemon.stats}
                                        />
                                        
                                        <Skills
                                            skills={this.props.data.abilitiesdes}
                                        />

                                    </div>
                                </div>
                                
                            </div>
                        </>
                            
                    ) : (<Loading/>)}
                </div>
                <Footer/>
            </div>
        )
    }
}

const mapStatetopProps =(state)=>{
    return{
        data: state.PerfilReducer
    }
}

const mapDispatchtopProps = {Pokedata}

export default connect(mapStatetopProps, mapDispatchtopProps)(withRouter(Pokemon)) 
