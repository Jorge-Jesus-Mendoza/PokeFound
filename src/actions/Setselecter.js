import axios from "axios";


export const Setselecter = (data) => (dispatch, getState) =>{

    dispatch({
        type: "LOADING",
    });

    if (data>0){
        let position = data
        dispatch({
            type: "SET_SELECTER",
            payload: position,
        });
    }else{
        let position = data
        dispatch({
            type: "SET_SELECTER",
            payload: position,
        });
    }

}