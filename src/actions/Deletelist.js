import { List } from "@mui/material";
import axios from "axios";
import Count_pokemon from "../config/Count_pokemon"
import Url from "../config/Url"



export const Deletelist = (list, id,handleClick) => async (dispatch, getState) =>{

 
    try{
        

        const filtered = list.filter((row) => row.id !== id)
        const first = await axios.delete(`${Url}/${id}`)
        const test = await axios.get(Count_pokemon)
        const count = {total: test.data.total-1}
        const newcount = await axios.put(Count_pokemon,count)
        handleClick()

        dispatch({
            type: "DELETE_A_POKEMON_FROM_THE_LIST",
            payload: filtered,
        });

    } catch(error){
        console.log(error)
    }
}