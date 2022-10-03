import axios from "axios";

export const Listaurl = (data) => async (dispatch, getState) =>{

    dispatch({
        type: "LOADING",
    });

    dispatch({
        type: "UPLOAD_URL",
        payload: `https://pokeapi.co/api/v2/pokemon/?offset=${data}`,
    });

    
}
