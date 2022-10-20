import axios from "axios";
import Swal from "sweetalert2";
import Url from "../config/Url"


export const Changedata = (form, id, trigger) => async (dispatch, getState) =>{

  
    try{

        const first = await axios.put(`${Url}/${id}`, form)

        if (first.status === 200) {
            Swal.fire(
                'Saved!',
                `${form.name} has been updated!`,
                'success'
            )
            

            dispatch({
                type: "UPDATE_INDIVIDUAL_POKEMON",
                payload: trigger,
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