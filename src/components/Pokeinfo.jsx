import React from 'react'

export class Pokeinfo extends React.Component{
    render(){
        const {id,pokemon,image,type,segtype,pokedescription, height, weight}=this.props
        return(
            <div className="pokeinfo">
                <h2 className="fuente">{pokemon.name}</h2>
                
                <div className=" my-2">
                    <img src={image} alt="This Pokemon doesn't have an official art"></img>
                </div>
                
                
                <div className="caracteristicas">

                    <div className={`sinfo tipos s${type}`}>

                        <p><b>{type}</b></p>
                    </div>
                    
                    
                    {segtype != null ? (
                        <div className={`sinfo tipos s${segtype}`}>
                            <p><b>{segtype}</b></p>
                        </div>
                    ) : ("")}

                    

                </div>

                <div>
                    <p className="fuente descripcion">
                        {pokedescription}
                    </p>
                </div>
                <div>
                    <div>
                        <p className="fuente"> Pokedex ID: {id} <br/>Height:{height * 10}m<br/> Weight:{weight * 10}Kg</p>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}


