import React from 'react'
import Top from '../components/Top'
import  Footer  from '../components/Footer'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FullPokelist } from '../actions/FullPokelist';
import { Loading } from '../components/Loading';
import { MainTitle } from "../components/Functions";
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Deletelist } from '../actions/Deletelist';
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import { withRouter } from '../components/Withrouter'
import {connect} from 'react-redux';
import update from 'react-addons-update';

class PokemonList extends React.Component{

  state={
    anchorEL: [],
    open: false
  }

  handleClick = () => {
    this.setState({
        open: true
      })
  };

  handleClose = (event, reason) => {
      this.setState({
        open: false
      })
  };
  
  handleopen = (id, event)=>{
    this.setState(update(this.state, {
      anchorEL: {
        [id]: {
          $set: event.currentTarget
        }
      }
    }));
  }

  handleclose = (id, event)=>{
    this.setState(update(this.state, {
      anchorEL: {
        [id]: {
          $set: null
        }
      }
    }));
  }

  handledelete = (pokelist, id,handleClick) =>{

    this.props.Deletelist(pokelist, id,handleClick)

  }

  componentDidMount() {
        
    this.props.FullPokelist();
    MainTitle();
    window.scrollTo(0, 0)
  }

  render(){
      let rows= null;
      let columns= [
        { field: 'id', headerName: 'id', flex: 1, align:'center', headerAlign: 'center' },
        { field: 'Name', headerName: 'Name', flex: 1, align:'center', headerAlign: 'center'},
        { field: 'Type', headerName: 'Type', flex: 1, align:'center', headerAlign: 'center',
      
        renderCell: (cellValues) =>{
          return(
            <div className={`${cellValues.row.Type} cell`}>
              <p className=' my-1'><b>{cellValues.row.Type}</b></p>
            </div>
          )
        }},
        { field: 'Type2', headerName: 'Second type', flex: 1, align:'center', headerAlign: 'center',
  
        renderCell: (cellValues) =>{
          return(
            <div className={`${cellValues.row.Type2} cell`}>
              <p className=' my-1'><b>{cellValues.row.Type2}</b></p>
            </div>
          )
        }},
  
        {field: 'Actions', headerName: 'Actions', flex: 1, align:'center', headerAlign: 'center', filterable: false, sortable: false,
  
          renderCell: (cellValues) =>{
            
            return (
              <>
                <ArrowDropDownIcon id={`menu${cellValues.row.id}`} className="cursor" onClick={(e)=>{this.handleopen(cellValues.row.id, e)}}/>
                <Menu id={`menu${cellValues.row.id}`} anchorEl={this.state.anchorEL[cellValues.row.id]} keepMounted open={Boolean(this.state.anchorEL[cellValues.row.id])} onClose={(e)=>(this.handleclose(cellValues.row.id,e))}>
                    <MenuItem onClick={()=> this.props.navigation(`/pokemon/${cellValues.row.Name}`)}>Show</MenuItem>
                    <MenuItem onClick={()=> this.props.navigation(`/edit/${cellValues.row.id}`)}>Edit</MenuItem>
                    <MenuItem onClick={()=> this.handledelete(this.props.list,cellValues.row.id, this.handleClick)}>Delete</MenuItem>
                </Menu>
                
    
              </>
              
            )
          }
        },
      ];

      const fulllist = ()=>{
        rows= this.props.list.map( pokemon =>(
            {id: pokemon.id, Name: pokemon.name, Type: pokemon.type, Type2: pokemon.sectype}
          ))
      }
      return(
        <>
          <Top/>
          <div className='container'>

            

              {this.props.list != null ? (
                fulllist(),
                
                <>
                  <Button variant="outlined" color="primary" onClick={()=>{this.props.navigation(-1)}}>
                      <ArrowBackIcon/>
                  </Button>
                  

                  
                  <Snackbar open={this.state.open} autoHideDuration={6000} onClose={this.handleClose}>
                      <Alert onClose={this.handleClose} severity="success" sx={{ width: '100%' }} variant="filled">
                          The pokemon has been successfully deleted!
                      </Alert>
                  </Snackbar>

                  <div className='text-center my5'>
                    <h5>Full list of Pokemon</h5>
                  </div>


                  

                  <DataGrid rows={rows} columns={columns} className="my-3" autoHeight={true}
                    initialState={{
                      pagination: {
                        pageSize: 10,
                      },
                    }}
                    rowsPerPageOptions={[5, 10, 20]}
                    disableSelectionOnClick={true}
                    components={{ Toolbar: GridToolbar }}
                  />
                  
                </>
              ) : (
                <Loading/>
              )}

          </div>
          <Footer/>
        </>
      )
  }
}

const mapDispatchtopProps ={ FullPokelist, Deletelist }


const mapStatetopProps =(state)=>{
    return{
        list: state.PokemonListReducer.list
    }
  }

export default connect(mapStatetopProps, mapDispatchtopProps)(withRouter(PokemonList)) 

