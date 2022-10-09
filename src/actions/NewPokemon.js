import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom'


export const NewPokemon = (form) => async (dispatch, getState) =>{

    
 
    try{
        const test = await axios.get("http://localhost:5000/count/1")
        const first = await axios.post("http://localhost:5000/results", form)

        
        
        
        
        
        if (first.status === 201) {
            Swal.fire(
                'Saved!',
                `${form.name} has been added!`,
                'success'
            )
            let prueba = {total: test.data.total+1}
            const text = await axios.put("http://localhost:5000/count/1",prueba)

            dispatch({
                type: "MODIFY_POKEMON_DATA",
                payload: test.data.total+1,
            });
        }else {
            Swal.fire(
                'Error!',
                'Something went wrong!',
                'error'
            )
        }



        

        
        

    } catch(error){
        console.log(error)
    }


    
}