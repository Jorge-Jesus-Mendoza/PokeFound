import React from 'react'
import "./styles/Card.css"

export class Loading extends React.Component{
  render(){

    return(
      <div className='contenedor'>
        
        <div className='pokeball'></div>
        <br />
        <h3 className='fuente'>Loading... this could take a few minutes</h3>
        
      </div>
    )
  }
}
