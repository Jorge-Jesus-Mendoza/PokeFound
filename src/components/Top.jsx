import React from 'react'
import Title from '../images/01.png'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'




export const Top = () => {
  const [search,setSearch]=useState("")

  const Update =(e)=>{
    return(
      setSearch(e.target.value.toLowerCase().replace(/ /g, "-"))
      )   
  }
  const Navigate = useNavigate()

  const Results =(event)=>{
    if (event.charCode === 13) {
      Navigate(`/search/${search}`)
    }
  }
  return (
    <div className='Top'>
        
        <div>
          <ul class="nav">
            
            <li  className='fuente ajuste'><Link to="/home">Pokedex</Link></li>
            <li  className='fuente ajuste'><Link to="/new">Add a Pokemon</Link></li>
            <li  className='fuente ajuste'><Link to="/List">Pokemon List</Link></li>
            
          </ul>
          
        </div>

        <div className='barra-s'>
          <div className='form-inline my-2 my-lg-0'>
            <input type="text" className="buscar form-control mr-sm-2" size="18"  placeholder='Find a pokemon' onChange={Update} onKeyPress={Results}></input>           
            <Link to={`/search/${search}`} className="btn btn-outline-success my-2 my-sm-0"><FontAwesomeIcon icon={faMagnifyingGlass}/></Link> 
            
          </div>
        </div>        
    </div>
    
  )
}
