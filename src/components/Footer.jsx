import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import Icon from '../images/1929180_upwork_icon.png'

class Footer extends React.Component{
  render(){

    return(
      <div className='footer'>

        <div className='iconos'>
          <div>

            <p> <b>©Jorge Mendoza</b> <br></br>Web designer freelancer</p>

          </div>


          <div>
            <ul className='footer-li'>
              <li>
                
                <a href="https://www.linkedin.com/in/jorge-jesus-mendoza-arraiz-469515226/" target="_blank">
                  <FontAwesomeIcon icon={faLinkedinIn} className="fab fa-facebook-f icon"/>
                  
                </a>
              </li>
              
              <li>
                <a href="https://github.com/Jorge-Jesus-Mendoza" target="_blank"><FontAwesomeIcon icon={faGithub} className="fab fa-linkedin-in icon"/></a></li>
              <li>
                <a href="https://www.upwork.com/freelancers/~017f4bd8d5575ded1a" target="_blank"><i><img src={Icon} className="fab fa-google-plus-g icon imagen" ></img></i></a></li>

              <li>
                <a href="https://twitter.com/MendozaArraiz" target="_blank"><FontAwesomeIcon icon={faTwitter} className="fab fa-twitter icon"/></a></li>

              
            </ul>
          </div>
          
        </div>
        <div className="rellenando2"></div>
      </div>
    )
  }
}
    

export default Footer
