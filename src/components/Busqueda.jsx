import React from 'react'
import {Link} from 'react-router-dom'

export const Busqueda = ({name,image, type}) => {
  return (
  
    
        <div className='sindecorar'>
            <Link to={`/pokemon/${name}`}>

                <div  className={`busqueda fuente ${type}`}>
                    <div className='posicionar-first'>
                        <h4 className='nombres'>{name}</h4>
                    </div>

                    <div className='posicionar-end'>
                        <img className='img otra-img' src={image} alt="" />
                    </div>
                </div>
            </Link>
            
        </div>
   
    
  )
}
