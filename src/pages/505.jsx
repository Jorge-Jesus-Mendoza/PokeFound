import React from 'react'
import NotServer from '../images/untitled-2-1485431563201_160w.jpg'
import { Top } from '../components/Top'
import { Footer } from '../components/Footer'

export const ErrorServer = () => {
  return (
    <div>
      <Top/>
        <div className='container'>

          <div className='centrado error505 my-10'>

            <div className='error'>
              <img className='notfound' src={NotServer}></img>
              
            </div>

            <div className='error fuente'>
              <h1>Error 505 the server hasn't been started</h1>
            </div>
          
          </div>
 
        </div>
      <Footer/>
    </div>
  )
}
