import axios from "axios";
import Url from "../config/Url";
import Count_pokemon from "../config/Count_pokemon";

export const FullPokelist = () => async (dispatch, getState) =>{

    dispatch({
        type: "LOADING_FULL_POKEMON_LIST",
    });

    try{

        const list = await axios.get(Url)

        const test = await axios.get(Count_pokemon)
        
        dispatch({
            type: "LOAD_FULL_POKEMON_LIST_DATA",
            payload: list.data,
            payload2: test.data.total,
        });

    } catch(error){
        console.log(error)
        window.location.assign("/ErrorServer");
    }
    
}