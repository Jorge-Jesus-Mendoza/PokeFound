import axios from "axios";

export const Listaurl = (data, data2) => async (dispatch, getState) =>{

    dispatch({
        type: "LOADING",
    });

    if(data2 == 0){
        dispatch({
            type: "UPLOAD_URL",
            payload: `http://localhost:5000/results?_start=0&_end=20`,
        });
    }else{
        dispatch({
            type: "UPLOAD_URL",
            payload: `http://localhost:5000/results?_start=${data}&_end=${data2}`,
        });
    }

    

    
}
