import axios from "axios";
import Count_pokemon from "../config/Count_pokemon";
import Url from "../config/Url";

export const Pokelist = (url, trigger, filter) => async (dispatch, getState) =>{

    dispatch({
        type: "LOADING",
    });

    if(trigger === false){

    
        try{

            const list = await axios.get(url)
            /* const test2 = await axios.get("http://localhost:5000/results?_start=0&_end=20&?type=dark")
            console.log(test2.data.length) */

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

    }else{

        try{

            const list = await axios.get(`${Url}?type=${filter}`)
            console.log(list.data)
            

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
    
}
