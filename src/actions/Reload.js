export const Reload = (data) => (dispatch, getState) =>{

    dispatch({
        type: "UPDATE_INDIVIDUAL_POKEMON",
        payload: data,
    });
    
}