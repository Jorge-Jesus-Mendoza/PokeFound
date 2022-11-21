import React from 'react'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField'
import {connect} from 'react-redux';
import Autocomplete from '@mui/material/Autocomplete';

import { SetDesc, SetName, SetType, SetSegtype, SetHeight, SetWeight, Setartwork, Setpreview, SetFirstName, SetFirstDesc, SetSecondName, SetSecondDesc, SetHiddendName, SetHiddenDesc, SetHP, SetAttack, SetDefense, SetSpecialAttack, SetSpecialDefense, SetSpeed } from '../actions/Handlechange';

class Form extends React.Component{
  render(){
      const {handleSubmit, handleChange,pokedescription,abilitiesdes,height,weight, name,image,img, data,stats, info, type, segtype}=this.props

      const types = ["grass","poison","water","fire","bug","normal","electric","ground","fighting","psychic","rock","ghost","ice","dragon","dark","steel","flying","fairy"]
      return(

      <form onSubmit={handleSubmit}>
          

          {info === null ? (
              <h5 className='fuente centrado my-3'>Enter the new pokemon data</h5>
          ):(<h5 className='fuente centrado my-3'>Enter the new data for {info.name}</h5>)}

          <div className='centrado my-5 mx-5 formulario'>
              <div>

                  <FormControl className='my-2' fullWidth>
                      
                      

                      <Autocomplete
                        disablePortal
                        id="type"
                        name="type"
                        options={types}
                        sx={{ width: 350 }}
                        disableClearable
                        defaultValue={type}
                        onChange={(event, value)=> this.props.SetType(value)}
                        renderInput={(params) => <TextField {...params} label="First Type" variant='standard'
                        />}
                      />


                  </FormControl>
                  

                  <FormControl className='my-2' fullWidth>
                      
                      <Autocomplete
                        disablePortal
                        id="s_type"
                        name="s_type"
                        options={types}
                        sx={{ width: 350 }}
                        defaultValue={segtype}
                        onChange={(event, value)=> this.props.SetSegtype(value)}
                        renderInput={(params) => <TextField {...params} label="Second Type" variant='standard'
                        />}
                      />
                  </FormControl>

                  <FormControl className='my-2' fullWidth>                 
                    <TextField
                      id="name"
                      name='name'
                      label="Name"
                      value={name}
                      onChange={(event)=> this.props.SetName(event.target.value)}
                      variant="standard"
                      required
                    />
                    <FormHelperText></FormHelperText>
                  </FormControl>

                  <FormControl className='my-2' fullWidth>                 
                    <TextField
                      id="preview"
                      name='preview'
                      label="Preview"
                      value={img}
                      onChange={(event)=> this.props.Setpreview(event.target.value)}
                      variant="standard"
                      required
                    />
                    <FormHelperText>Preview image Link</FormHelperText>
                  </FormControl>

                  <FormControl className='my-2' fullWidth>                 
                    <TextField
                      id="artwork"
                      name='artwork'
                      label="Artwork"
                      value={image}
                      onChange={(event)=> this.props.Setartwork(event.target.value)}
                      variant="standard"
                      required
                    />
                    <FormHelperText>Artwork image Link</FormHelperText>
                  </FormControl>

                  <FormControl className='my-2' fullWidth>                 
                    <TextField
                      id="weight"
                      name='weight'
                      label="Weight"
                      value={weight}
                      onChange={(event)=> this.props.SetWeight(event.target.value)}
                      variant="standard"
                      type="number"
                      required
                    />
                    <FormHelperText></FormHelperText>
                  </FormControl>

                  <FormControl className='my-2' fullWidth>                 
                    <TextField
                      id="heigth"
                      name='heigth'
                      label="Heigth"
                      value={height}
                      onChange={(event)=> this.props.SetHeight(event.target.value)}
                      variant="standard"
                      type="number"
                      required
                    />
                    <FormHelperText></FormHelperText>
                  </FormControl>

                  <FormControl className='my-2' fullWidth>                 
                    <TextField
                      id="ability"
                      name='ability'
                      label="First ability name"
                      value={abilitiesdes[0].name}
                      onChange={(event)=> this.props.SetFirstName(event.target.value)}
                      variant="standard"
                      required
                    />
                    <FormHelperText></FormHelperText>
                  </FormControl>

                  <FormControl className='my-2' fullWidth>                 
                    <TextField
                      id="abilitydes"
                      name='abilitydes'
                      label="First ability description"
                      value={abilitiesdes[0].effect}
                      onChange={(event)=> this.props.SetFirstDesc(event.target.value)}
                      variant="outlined"
                      minRows={5}
                      multiline
                      required
                    />
                    <FormHelperText></FormHelperText>
                  </FormControl>


                  {abilitiesdes.length >2 ? (
                    <>
                      <FormControl className='my-2' fullWidth>                 
                        <TextField
                          id="h_ability"
                          name='h_ability'
                          label="Hidden ability name"
                          value={abilitiesdes[2].name}
                          onChange={(event)=> this.props.SetHiddendName(event.target.value)}
                          variant="standard"
                          
                        />
                        <FormHelperText></FormHelperText>
                      </FormControl>



                      <FormControl className='my-2' fullWidth>                 
                        <TextField
                          id="h_abilitydes"
                          name='h_abilitydes'
                          label="Hidden ability description"
                          value={abilitiesdes[2].effect}
                          onChange={(event)=> this.props.SetHiddenDesc(event.target.value)}
                          variant="outlined"
                          minRows={5}
                          multiline
                          
                        />
                        <FormHelperText>The hidden ability it's optional</FormHelperText>
                      </FormControl>
                    
                    
                    </>
                  ) : (

                    <>
                      <FormControl className='my-2' fullWidth>                 
                        <TextField
                          id="h_ability"
                          name='h_ability'
                          label="Hidden ability name"
                          value={data.h_ability}
                          onChange={handleChange}
                          variant="standard"
                          
                        />
                        <FormHelperText></FormHelperText>
                      </FormControl>



                      <FormControl className='my-2' fullWidth>                 
                        <TextField
                          id="h_abilitydes"
                          name='h_abilitydes'
                          label="Hidden ability description"
                          value={data.h_abilitydes}
                          onChange={handleChange}
                          variant="outlined"
                          minRows={5}
                          multiline
                          
                        />
                        <FormHelperText>The hidden ability it's optional</FormHelperText>
                      </FormControl>
                    
                    </>
                  )}
                  
                  
              </div>

              <div className='status mx-5'>

                  <FormControl className='my-2' fullWidth>                 
                    <TextField
                      id="hp"
                      name='hp'
                      label="Hp"
                      value={stats[0].base_stat}
                      onChange={(event)=> this.props.SetHP(event.target.value)}
                      variant="standard"
                      type="number"
                      required
                    />
                    <FormHelperText></FormHelperText>
                  </FormControl>

                  <FormControl className='my-2' fullWidth>                 
                    <TextField
                      id="attack"
                      name='attack'
                      label="Attack"
                      value={stats[1].base_stat}
                      onChange={(event)=> this.props.SetAttack(event.target.value)}
                      variant="standard"
                      type="number"
                      required
                    />
                    <FormHelperText></FormHelperText>
                  </FormControl>

                  <FormControl className='my-2' fullWidth>                 
                    <TextField
                      id="defense"
                      name='defense'
                      label="Defense"
                      value={stats[2].base_stat}
                      onChange={(event)=> this.props.SetDefense(event.target.value)}
                      variant="standard"
                      type="number"
                      required
                    />
                    <FormHelperText></FormHelperText>
                  </FormControl>

                  <FormControl className='my-2' fullWidth>                 
                    <TextField
                      id="s_attack"
                      name='s_attack'
                      label="Special Attack"
                      value={stats[3].base_stat}
                      onChange={(event)=> this.props.SetSpecialAttack(event.target.value)}
                      variant="standard"
                      type="number"
                      required
                    />
                    <FormHelperText></FormHelperText>
                  </FormControl>

                  <FormControl className='my-2' fullWidth>                 
                    <TextField
                      id="s_defense"
                      name='s_defense'
                      label="Special Defense"
                      value={stats[4].base_stat}
                      onChange={(event)=> this.props.SetSpecialDefense(event.target.value)}
                      variant="standard"
                      type="number"
                      required
                    />
                    <FormHelperText></FormHelperText>
                  </FormControl>

                  <FormControl className='my-2' fullWidth>                 
                    <TextField
                      id="speed"
                      name='speed'
                      label="Speed"
                      value={stats[5].base_stat}
                      onChange={(event)=> this.props.SetSpeed(event.target.value)}
                      variant="standard"
                      type="number"
                      required
                    />
                    <FormHelperText></FormHelperText>
                  </FormControl>

                  <FormControl className='my-2' fullWidth>                 
                    <TextField
                      id="description"
                      name='description'
                      label="Pokemon description"
                      value={pokedescription}
                      onChange={(event)=> this.props.SetDesc(event.target.value)}
                      variant="outlined"
                      minRows={2}
                      multiline
                      required
                    />
                    <FormHelperText></FormHelperText>
                  </FormControl>

                  
                  {abilitiesdes.length >1 ? (
                    <>
                      <FormControl className='my-2' fullWidth>                 
                        <TextField
                          id="s_ability"
                          name='s_ability'
                          label="Second ability name"
                          value={abilitiesdes[1].name}
                          onChange={(event)=> this.props.SetSecondName(event.target.value)}
                          variant="standard"
                          
                        />
                        <FormHelperText></FormHelperText>
                      </FormControl>

                      <FormControl className='my-2' fullWidth>                 
                        <TextField
                          id="s_abilitydes"
                          name='s_abilitydes'
                          label="Second ability description"
                          value={abilitiesdes[1].effect}
                          onChange={(event)=> this.props.SetSecondDesc(event.target.value)}
                          variant="outlined"
                          minRows={5}
                          multiline
                          
                        />
                        <FormHelperText>The second ability it's optional</FormHelperText>
                      </FormControl>
                    
                    </>
                  ) : (
                    <>
                      <FormControl className='my-2' fullWidth>                 
                        <TextField
                          id="s_ability"
                          name='s_ability'
                          label="Second ability name"
                          value={data.s_ability}
                          onChange={handleChange}
                          variant="standard"
                          
                        />
                        <FormHelperText></FormHelperText>
                      </FormControl>

                      <FormControl className='my-2' fullWidth>                 
                        <TextField
                          id="s_abilitydes"
                          name='s_abilitydes'
                          label="Second ability description"
                          value={data.s_abilitydes}
                          onChange={handleChange}
                          variant="outlined"
                          minRows={5}
                          multiline
                          
                        />
                        <FormHelperText>The second ability it's optional</FormHelperText>
                      </FormControl>
                    </>
                  )}
                  

              </div>



              
          </div>
          <div className='centrado'>

              {info === null ? (<Button variant="contained" color="success" type='submit'>
                  
                  Save New Pokemon
              </Button>):(<Button variant="contained" color="success" type='submit'>
                  
                  Update
              </Button>)}
              
              
          </div>
      </form>
    )
  }
}

const mapDispatchtopProps ={
  SetDesc, SetName, SetType, SetSegtype, SetHeight, SetWeight, Setartwork, Setpreview, SetFirstName, SetFirstDesc, SetSecondName, SetSecondDesc, SetHiddendName, SetHiddenDesc, SetHP, SetAttack, SetDefense, SetSpecialAttack, SetSpecialDefense, SetSpeed
}

export default connect(null, mapDispatchtopProps)(Form);
 



