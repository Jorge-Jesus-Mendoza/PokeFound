import React from 'react'
import Top from '../components/Top';
import  Footer  from '../components/Footer';
import { Results } from '../components/Results';
import { Loading } from '../components/Loading';
import { Title } from '../components/Functions';
import { Pokesearch } from '../actions/Pokesearch';
import {connect} from 'react-redux';
import { withRouter } from '../components/Withrouter'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';



class Buscar extends React.Component{

  componentDidMount() {

    Title('Search | ', this.props.params.search);
    window.scrollTo(0, 0);
    this.props.Pokesearch(this.props.params.search);

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.params.search !== this.props.params.search) {
      window.scrollTo(0, 0);
      this.props.Pokesearch(this.props.params.search);
    }
  }
  render(){
      return(
        <div>
          <Top/>
          
          <div className='container'>

            <Button variant="outlined" color="primary" onClick={()=>{this.props.navigation(-1)}}>
              <ArrowBackIcon/>
            </Button>

            {this.props.results != null ? (

              
              
              this.props.results.map(pokemon =>(
                <Results
                  key={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.img}
                  type={pokemon.type}
                />
              ))
              
            ):(<Loading/>)}
            
          </div>
          
          <Footer/>
          
        </div>
      )
  }
}

const mapDispatchtopProps ={ Pokesearch }


const mapStatetopProps =(state)=>{
    return{
        results: state.SearchReducer.results
    }
  }

export default connect(mapStatetopProps, mapDispatchtopProps)(withRouter(Buscar)) 
