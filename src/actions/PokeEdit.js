import axios from "axios";


export const PokeEdit = (name) => async (dispatch, getState) =>{
    dispatch({
        type: "RESET_NEW_DATA",
    });

    try{
        const peticion = await axios.get(name)
        
        dispatch({
            type: "LOAD_DATA_PERFIL",
            payload: peticion.data,
            
        });

    }catch (error){
        console.log(error)
        window.location.assign("/notfound");
    }
    
    
}