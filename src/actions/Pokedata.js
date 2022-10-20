import axios from "axios";


export const Pokedata = (name) => async (dispatch, getState) =>{
    dispatch({
        type: "LOADING_PERFIL",
    });

    try{
        const info = await axios.get(name)
        
        dispatch({
            type: "LOAD_DATA_PERFIL",
            payload: info.data[0],
            
        });

    }catch (error){
        console.log(error)
        window.location.assign("/notfound");
    }
    
    
}