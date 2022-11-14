import axios from "axios";
import Count_pokemon from "../config/Count_pokemon";
import Url from "../config/Url";

export const Pokelist = (url, trigger, filter, sectype) => async (dispatch, getState) =>{

    dispatch({
        type: "LOADING",
    });

    if(trigger === false){

    
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

    }else{

        if (sectype === "" || sectype === null){

            try{
                const list = await axios.get(`${Url}?type=${filter}`)
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
                const list = await axios.get(`${Url}?type=${filter}&sectype=${sectype}`)
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
    
}
