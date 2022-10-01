import React from 'react'
import NotImage from '../images/deaw1uz-42761132-908b-4ded-8c3d-5ad1b20fe9e4.png'
import { Top } from './Top'
import { Footer } from './Footer'

export const Notfound = () => {
  return (
    <div>
      <Top/>
        <div className='container'>

          <div className='error'>
            <img className='notfound' src={NotImage}></img>
            
          </div>

          <div className='error fuente'>
            <h1>Error 404 Content not found</h1>
          </div>
 
        </div>
      <Footer/>
    </div>
  )
}
