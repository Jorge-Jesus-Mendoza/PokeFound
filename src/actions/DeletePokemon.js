import axios from "axios";
import Swal from "sweetalert2";
import Count_pokemon from "../config/Count_pokemon"
import Url from "../config/Url"



export const DeletePokemon = (form) => async (dispatch, getState) =>{

 
    try{
        const test = await axios.get(Count_pokemon)
        


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                const delete_confirmed = async ()=>{
                    const first = await axios.delete(`${Url}/${form}`)
                    if (first.status === 200) {
                        Swal.fire(
                            'Deleted!',
                            `The Pokemon has been deleted!`,
                            'success'
                        )

                        let count = {total: test.data.total-1}
                        await axios.put(Count_pokemon,count).then(response => {
                            dispatch({
                                type: "MODIFY_POKEMON_DATA",
                                payload: test.data.total-1,
                            });
                        })


            
                        
                    }else {
                        Swal.fire(
                            'Error!',
                            'Something went wrong!',
                            'error'
                        )
                    }
                }
                delete_confirmed()
                
              
            }
          })  

        
        
        

    } catch(error){
        console.log(error)
    }
}