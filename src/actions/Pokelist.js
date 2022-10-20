import axios from "axios";
import Count_pokemon from "../config/Count_pokemon";

export const Pokelist = (url) => async (dispatch, getState) =>{

    dispatch({
        type: "LOADING",
    });


    try{

        const list = await axios.get(url)

        const test = await axios.get(Count_pokemon)
        
        dispatch({
            type: "LOAD_DATA",
            payload: list.data,
            payload2: test.data.total,
        });

    } catch(error){
        console.log(error)
        window.location.assign("/ErrorServer");
    }

    
}
