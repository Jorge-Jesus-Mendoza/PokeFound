import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom'


export const Changedata = (form, id, disparador) => async (dispatch, getState) =>{

 
    try{
        const test = await axios.get("http://localhost:5000/count/1")
        const first = await axios.put(`http://localhost:5000/results/${id}`, form)

        
        
        
        
        
        if (first.status === 200) {
            Swal.fire(
                'Saved!',
                `${form.name} has been updated!`,
                'success'
            )
            

            dispatch({
                type: "UPDATE_INDIVIDUAL_POKEMON",
                payload: disparador,
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