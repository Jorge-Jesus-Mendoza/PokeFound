import Url from "../config/Url"

export const Listurl = (data, data2, trigger, filter) => async (dispatch, getState) =>{

    dispatch({
        type: "LOADING",
    });

    if(trigger === false){

        if(data2 == 0){
            dispatch({
                type: "UPLOAD_URL",
                payload: `${Url}?_start=0&_end=20`,
            });
        }else{
            dispatch({
                type: "UPLOAD_URL",
                payload: `${Url}?_start=${data}&_end=${data2}`,
            });
        }

    }else{
        if(data2 == 0){
            dispatch({
                type: "UPLOAD_URL",
                payload: `${Url}?_start=0&_end=20`,
            });
        }else{
            dispatch({
                type: "UPLOAD_URL",
                payload: `${Url}?_start=${data}&_end=${data2}`,
            });
        }
    }

    

    
}
