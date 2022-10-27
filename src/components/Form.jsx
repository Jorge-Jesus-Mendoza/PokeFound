import React from 'react'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import { useDispatch } from 'react-redux';

import { SetDesc, SetName, SetType, SetSegtype, SetHeight, SetWeight, Setartwork, Setpreview, SetFirstName, SetFirstDesc, SetSecondName, SetSecondDesc, SetHiddendName, SetHiddenDesc, SetHP, SetAttack, SetDefense, SetSpecialAttack, SetSpecialDefense, SetSpeed } from '../actions/Handlechange';


export const Form = ({handleSubmit, handleChange,pokedescription,abilitiesdes,height,weight, name,image,img, data,stats, info}) => {

  
  const dispatch = useDispatch()
  return (
    <form onSubmit={handleSubmit}>
        

        {info === null ? (
            <h5 className='fuente centrado my-3'>Enter the new pokemon data</h5>
        ):(<h5 className='fuente centrado my-3'>Enter the new data for {info.name}</h5>)}

        <div className='centrado my-5 mx-5 formulario'>
            <div>

                <FormControl className='my-2' fullWidth>
                    
                    <InputLabel variant='standard' id="type">Type</InputLabel>
                    <Select
                        labelId="type"
                        id="type"
                        name="type"
                        // value={age}
                        label="Type"
                        onChange={(event)=> dispatch(SetType(event.target.value))} 
                        variant='standard'
                        
                    >
                        
                        <MenuItem value="grass">grass</MenuItem>
                        <MenuItem value="poison">poison</MenuItem>
                        <MenuItem value="water">water</MenuItem>
                        <MenuItem value="fire">fire</MenuItem>
                        <MenuItem value="bug">bug</MenuItem>
                        <MenuItem value="normal">normal</MenuItem>
                        <MenuItem value="electric">electric</MenuItem>
                        <MenuItem value="ground">ground</MenuItem>
                        <MenuItem value="fighting">fighting</MenuItem>
                        <MenuItem value="psychic">psychic</MenuItem>
                        <MenuItem value="rock">rock</MenuItem>
                        <MenuItem value="ghost">ghost</MenuItem>
                        <MenuItem value="ice">ice</MenuItem>
                        <MenuItem value="dragon">dragon</MenuItem>
                        <MenuItem value="dark">dark</MenuItem>
                        <MenuItem value="steel">steel</MenuItem>
                        <MenuItem value="flying">flying</MenuItem>
                        <MenuItem value="fairy">fairy</MenuItem>
                    </Select>
                </FormControl>
                

                <FormControl className='my-2' fullWidth>
                    
                    <InputLabel variant='standard' id="s_type">Second Type</InputLabel>
                    <Select
                        labelId="s_type"
                        id="s_type"
                        name="s_type"
                        // value={age}
                        label="Second Type"
                        onChange={(event)=> dispatch(SetSegtype(event.target.value))} 
                        variant='standard'
                    >
                        <MenuItem value="">Disable Second type</MenuItem>
                        <MenuItem value="grass">grass</MenuItem>
                        <MenuItem value="poison">poison</MenuItem>
                        <MenuItem value="water">water</MenuItem>
                        <MenuItem value="fire">fire</MenuItem>
                        <MenuItem value="bug">bug</MenuItem>
                        <MenuItem value="normal">normal</MenuItem>
                        <MenuItem value="electric">electric</MenuItem>
                        <MenuItem value="ground">ground</MenuItem>
                        <MenuItem value="fighting">fighting</MenuItem>
                        <MenuItem value="psychic">psychic</MenuItem>
                        <MenuItem value="rock">rock</MenuItem>
                        <MenuItem value="ghost">ghost</MenuItem>
                        <MenuItem value="ice">ice</MenuItem>
                        <MenuItem value="dragon">dragon</MenuItem>
                        <MenuItem value="dark">dark</MenuItem>
                        <MenuItem value="steel">steel</MenuItem>
                        <MenuItem value="flying">flying</MenuItem>
                        <MenuItem value="fairy">fairy</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className='my-2' fullWidth>                 
                  <TextField
                    id="name"
                    name='name'
                    label="Name"
                    value={name}
                    onChange={(event)=> dispatch(SetName(event.target.value))}
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
                    onChange={(event)=> dispatch(Setpreview(event.target.value))}
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
                    onChange={(event)=> dispatch(Setartwork(event.target.value))}
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
                    onChange={(event)=> dispatch(SetWeight(event.target.value))}
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
                    onChange={(event)=> dispatch(SetHeight(event.target.value))}
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
                    onChange={(event)=> dispatch(SetFirstName(event.target.value))}
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
                    onChange={(event)=> dispatch(SetFirstDesc(event.target.value))}
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
                        onChange={(event)=> dispatch(SetHiddendName(event.target.value))}
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
                        onChange={(event)=> dispatch(SetHiddenDesc(event.target.value))}
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
                    onChange={(event)=> dispatch(SetHP(event.target.value))}
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
                    onChange={(event)=> dispatch(SetAttack(event.target.value))}
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
                    onChange={(event)=> dispatch(SetDefense(event.target.value))}
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
                    onChange={(event)=> dispatch(SetSpecialAttack(event.target.value))}
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
                    onChange={(event)=> dispatch(SetSpecialDefense(event.target.value))}
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
                    onChange={(event)=> dispatch(SetSpeed(event.target.value))}
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
                    onChange={(event)=> dispatch(SetDesc(event.target.value))}
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
                        onChange={(event)=> dispatch(SetSecondName(event.target.value))}
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
                        onChange={(event)=> dispatch(SetSecondDesc(event.target.value))}
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
