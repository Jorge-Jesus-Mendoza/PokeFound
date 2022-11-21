import React from 'react'
import NotImage from '../images/deaw1uz-42761132-908b-4ded-8c3d-5ad1b20fe9e4.png'
import Top from '../components/Top'
import  Footer  from '../components/Footer'
import { withRouter } from '../components/Withrouter'

class Notfound extends React.Component{
  
  render(){
      return(
        <div>
          <Top/>
            <div className='container'>

              <div className='error'>
                <img className='notfound' src={NotImage} alt="Not Found"></img>
                
              </div>

              <div className='error fuente'>
                <h1>Error 404 Content not found</h1>
              </div>
    
            </div>
          <Footer/>
        </div>
    )
  }
}
export default withRouter(Notfound) 
