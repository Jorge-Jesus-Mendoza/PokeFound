import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { withRouter } from '../components/Withrouter'

class Top extends React.Component{
  state={
    search: ""
  }

  Update =(e)=>{
    this.setState({
      search: e.target.value.toLowerCase().replace(/ /g, "-")
    })
  }

  Results =(event)=>{
    if (event.charCode === 13) {
      this.props.navigation(`/search/${this.state.search}`)
    }
  }

  render(){
      return(
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
                <input type="text" className="buscar form-control mr-sm-2" size="18"  placeholder='Find a pokemon' onChange={this.Update} onKeyPress={this.Results}></input>           
                <Link to={`/search/${this.state.search}`} className="btn btn-outline-success my-2 my-sm-0"><FontAwesomeIcon icon={faMagnifyingGlass}/></Link> 
                
              </div>
            </div>        
        </div>
      )
  }
}

export default withRouter(Top)

