import axios from "axios";


export const Setselecter = (data) => (dispatch, getState) =>{

    dispatch({
        type: "LOADING",
    });

    
    let position = data
    dispatch({
        type: "SET_SELECTER",
        payload: position,
    });
    
}