import axios from "axios";


export const Pokeperfil = (name) => async (dispatch, getState) =>{
    dispatch({
        type: "LOADING_PERFIL",
    });

    try{
        const peticion = await axios.get(name)
        
        dispatch({
            type: "LOAD_DATA_PERFIL",
            payload: peticion.data[0],
            
        });

    }catch (error){
        console.log(error)
        window.location.assign("/notfound");
    }
    
    
}