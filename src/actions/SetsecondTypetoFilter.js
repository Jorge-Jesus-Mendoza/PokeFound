export const SetsecondTypetoFilter = (data) => (dispatch, getState) =>{

    dispatch({
        type: "SET_SECOND_TYPE_TO_FILTER_THE_LIST",
        payload: data,
    });
    
}