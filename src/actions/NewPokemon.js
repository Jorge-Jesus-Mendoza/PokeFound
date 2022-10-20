import axios from "axios";
import Swal from "sweetalert2";
import Count_pokemon from "../config/Count_pokemon"
import Url from "../config/Url"


export const NewPokemon = (form) => async (dispatch, getState) =>{

    
 
    try{
        const test = await axios.get(Count_pokemon)
        const addPokemon = await axios.post(Url, form)

        if (addPokemon.status === 201) {
            Swal.fire(
                'Saved!',
                `${form.name} has been added!`,
                'success'
            )
            let count = {total: test.data.total+1}
            const text = await axios.put(Count_pokemon,count)

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