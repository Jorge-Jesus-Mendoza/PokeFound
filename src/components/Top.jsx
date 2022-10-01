import React from 'react'
import Title from '../images/01.png'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'



export const Top = () => {
  const [busqueda,setBusqueda]=useState("")

  const Buscar =(e)=>{
    return(
      setBusqueda(e.target.value.toLowerCase().replace(/ /g, "-"))
      )   
  }
  const Navigate = useNavigate()

  const Direccionar =(event)=>{
    if (event.charCode === 13) {
      Navigate(`/search/${busqueda}`)
    }
  }
  return (
    <div className='Top'>
        {/* <div>
          <Link to="/inicio"><img src={Title}></img></Link>
        </div> */}

        <div>
          <ul class="nav">
            {/* <li  className='fuente ajuste'><Link to="/Home">Home</Link></li> */}
            <li  className='fuente ajuste'><Link to="/inicio">Pokedex</Link></li>
            {/* <li  className='fuente ajuste'><a href="#">Items</a></li> */}
            {/* <li  className='fuente ajuste'><a href="#">Berries</a></li>            */}
          </ul>
        </div>

        <div className='barra-s'>
          <div className='form-inline my-2 my-lg-0'>
            <input type="text" className="buscar form-control mr-sm-2" size="15"  placeholder='Find a pokemon' onChange={Buscar} onKeyPress={Direccionar}></input>           
            <Link to={`/search/${busqueda}`} className="btn btn-outline-success my-2 my-sm-0"><FontAwesomeIcon icon={faMagnifyingGlass}/></Link> 
            
          </div>
        </div>        
    </div>
    
  )
}
