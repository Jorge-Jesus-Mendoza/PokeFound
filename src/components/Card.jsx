import React from "react";
import {Link} from 'react-router-dom'
import "./styles/Card.css"

const Card = ({name,image, type, sectype, id, weight, height}) =>{
    return (

        <div>
            
            <div className={`card ${type}`}>
                <Link to={`/pokemon/${name}`}>

                    <div className="id"><p >#{id}</p></div>
                    <div >
                        <img className="img otra-img" src={image}></img>
                    </div>

                    {name.length < 13 ? (
                        <div>
                            <p className="fuente nombres">{name}</p>
                        </div>
                    ):(
                        
                        <div>
                            <p className="fuente nombres2">{name}</p>
                        </div>
                    )}

                    
                    
                    

                    <div className="datos fuente"> 

                        <div>
                            <p className="info">{type} </p>
                        </div>

                        {sectype != null ? (<div>
                            <p className="info">  {sectype}  </p>
                        </div> ) : ("")}

                        
                    </div>
                    <div className="kg fuente">
                        <div>
                            
                            <p className="peso">{weight}Kg</p>
                        </div>

                        <div>
                            <p className="peso">{height}m</p>
                        </div>

                    </div>
                </Link>
                
            </div>
        </div>

    )
}
export default Card