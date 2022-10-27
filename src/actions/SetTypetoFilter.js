export const SetTypetoFilter = (data) => (dispatch, getState) =>{

    dispatch({
        type: "SET_TYPE_TO_FILTER_THE_LIST",
        payload: data,
    });
    
}