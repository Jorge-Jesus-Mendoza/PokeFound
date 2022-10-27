export const Filter = (data) => (dispatch, getState) =>{

    dispatch({
        type: "FILTER_POKEMON_LIST",
        payload: data,
    });
    
}