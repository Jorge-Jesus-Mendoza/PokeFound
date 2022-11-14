import React from 'react'
import { Top } from '../components/Top'
import { Footer } from '../components/Footer'
import { DataGrid, GridRowsProp, GridColDef, GridToolbar  } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { FullPokelist } from '../actions/FullPokelist';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { Loading } from '../components/Loading';
import { MainTitle } from "../components/Functions";
import { useState } from 'react';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Deletelist } from '../actions/Deletelist';
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import Box from '@mui/material/Box';


export const PokemonList = () => {
    const navigate = useNavigate()
    const list = useSelector(Store => Store.PokemonListReducer.list)
    const [anchorEL, setAnchor]= useState([])

    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(true);
    };

    const handleClose = (event, reason) => {
        setOpen(false);
    };
    
    const dispatch = useDispatch()

    const handleopen = (id, event)=>{
      setAnchor(anchor =>({
        ...anchor,
        [id]: event.currentTarget

      }))
    }

    const handleclose = (id, event)=>{
      setAnchor(anchor =>({
        ...anchor,
        [id]: null

      }))
    }
    const handledelete = (pokelist, id,handleClick) =>{

      dispatch(Deletelist(pokelist, id,handleClick))

    }

    useEffect(()=>{
      
      dispatch(FullPokelist());
      MainTitle();
      window.scrollTo(0, 0)
        
    },[])

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
            <ArrowDropDownIcon id={`menu${cellValues.row.id}`} className="cursor" onClick={(e)=>{handleopen(cellValues.row.id, e)}}/>
            <Menu id={`menu${cellValues.row.id}`} anchorEl={anchorEL[cellValues.row.id]} keepMounted open={Boolean(anchorEL[cellValues.row.id])} onClose={(e)=>(handleclose(cellValues.row.id,e))}>
                <MenuItem onClick={()=> navigate(`/pokemon/${cellValues.row.Name}`)}>Show</MenuItem>
                <MenuItem onClick={()=> navigate(`/edit/${cellValues.row.id}`)}>Edit</MenuItem>
                <MenuItem onClick={()=> handledelete(list,cellValues.row.id,handleClick)}>Delete</MenuItem>
            </Menu>
            

          </>
          
        )
      }
    
    
    },
    ];

    const fulllist = ()=>{
      rows= list.map( pokemon =>(
          {id: pokemon.id, Name: pokemon.name, Type: pokemon.type, Type2: pokemon.sectype}
        ))
    }
  return (
    <>
        <Top/>
        <div className='container'>

          

            {list != null ? (
              fulllist(),
              
              <>
                <Button variant="outlined" color="primary" onClick={()=>{navigate(-1)}}>
                    <ArrowBackIcon/>
                </Button>
                

                
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }} variant="filled">
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
