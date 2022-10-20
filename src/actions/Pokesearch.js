import axios from "axios";
import Url from "../config/Url";



export const Pokesearch = (search) => async (dispatch, getState) =>{

    dispatch({
        type: "NO_SEARCH",
    });

    try{
        
        const alldata = await axios.get(Url)
        const list = alldata.data.filter(y=>y.name.includes(search))
       
        dispatch({
            type: "SEARCH",
            payload: list,
        });

    } catch(error){
        console.log(error)
    }

}
