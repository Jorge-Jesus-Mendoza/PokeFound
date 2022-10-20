import React from 'react'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'

export const Form = ({handleSubmit, handleChange, data, info}) => {
  return (
    <form onSubmit={handleSubmit}>
        

        {info === null ? (
            <h5 className='fuente centrado'>Enter the new pokemon data</h5>
        ):(<h5 className='fuente centrado'>Enter the new data for {info.name}</h5>)}

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
                        onChange={handleChange} 
                        variant='standard'
                        required
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
                        onChange={handleChange} 
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
                    </Select>
                </FormControl>

                <FormControl className='my-2' fullWidth>                 
                  <TextField
                    id="name"
                    name='name'
                    label="Name"
                    value={data.name}
                    onChange={handleChange}
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
                    value={data.preview}
                    onChange={handleChange}
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
                    value={data.artwork}
                    onChange={handleChange}
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
                    value={data.weight}
                    onChange={handleChange}
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
                    value={data.heigth}
                    onChange={handleChange}
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
                    value={data.ability}
                    onChange={handleChange}
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
                    value={data.abilitydes}
                    onChange={handleChange}
                    variant="outlined"
                    minRows={5}
                    multiline
                    required
                  />
                  <FormHelperText></FormHelperText>
                </FormControl>



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
                    label="Second ability description"
                    value={data.h_abilitydes}
                    onChange={handleChange}
                    variant="outlined"
                    minRows={5}
                    multiline
                    
                  />
                  <FormHelperText>The hidden ability it's optional</FormHelperText>
                </FormControl>
                
            </div>

            <div className='status mx-5'>

                <FormControl className='my-2' fullWidth>                 
                  <TextField
                    id="hp"
                    name='hp'
                    label="Hp"
                    value={data.hp}
                    onChange={handleChange}
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
                    value={data.attack}
                    onChange={handleChange}
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
                    value={data.defense}
                    onChange={handleChange}
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
                    value={data.s_attack}
                    onChange={handleChange}
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
                    value={data.s_defense}
                    onChange={handleChange}
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
                    value={data.speed}
                    onChange={handleChange}
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
                    value={data.description}
                    onChange={handleChange}
                    variant="outlined"
                    minRows={2}
                    multiline
                    required
                  />
                  <FormHelperText></FormHelperText>
                </FormControl>

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
