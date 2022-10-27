const SetName = (data) => (dispatch, getState) =>{

    dispatch({
        type: "UPDATE_NAME",
        payload: data,
    });
    
}

const SetType = (data) => (dispatch, getState) =>{

    dispatch({
        type: "UPDATE_TYPE",
        payload: data,
    });
    
}
const SetSegtype = (data) => (dispatch, getState) =>{

    dispatch({
        type: "UPDATE_SECOND_TYPE",
        payload: data,
    });
    
}
const Setpreview = (data) => (dispatch, getState) =>{

    dispatch({
        type: "UPDATE_PREVIEW",
        payload: data,
    });
    
}
const Setartwork = (data) => (dispatch, getState) =>{

    dispatch({
        type: "UPDATE_ARTWORK",
        payload: data,
    });
    
}
const SetDesc = (data) => (dispatch, getState) =>{

    dispatch({
        type: "UPDATE_DESCRIPTION",
        payload: data,
    });
    
}

const SetWeight = (data) => (dispatch, getState) =>{

    dispatch({
        type: "UPDATE_WEIGHT",
        payload: data,
    });
    
}

const SetHeight = (data) => (dispatch, getState) =>{

    dispatch({
        type: "UPDATE_HEIGHT",
        payload: data,
    });
    
}
const SetFirstName = (data) => (dispatch, getState) =>{

    dispatch({
        type: "UPDATE_FIRST_ABILITY_NAME",
        payload: data,
    });
    
}

const SetFirstDesc = (data) => (dispatch, getState) =>{

    dispatch({
        type: "UPDATE_FIRST_ABILITY_DESCRIPTION",
        payload: data,
    });
    
}

const SetSecondName = (data) => (dispatch, getState) =>{

    dispatch({
        type: "UPDATE_SECOND_ABILITY_NAME",
        payload: data,
    });
    
}

const SetSecondDesc = (data) => (dispatch, getState) =>{

    dispatch({
        type: "UPDATE_SECOND_ABILITY_DESCRIPTION",
        payload: data,
    });
    
}

const SetHiddendName = (data) => (dispatch, getState) =>{

    dispatch({
        type: "UPDATE_HIDDEN_ABILITY_NAME",
        payload: data,
    });
    
}

const SetHiddenDesc = (data) => (dispatch, getState) =>{

    dispatch({
        type: "UPDATE_HIDDEN_ABILITY_DESCRIPTION",
        payload: data,
    });
    
}

const SetHP = (data) => (dispatch, getState) =>{

    dispatch({
        type: "UPDATE_HP",
        payload: data,
    });
    
}

const SetAttack = (data) => (dispatch, getState) =>{

    dispatch({
        type: "UPDATE_ATTACK",
        payload: data,
    });
    
}

const SetDefense = (data) => (dispatch, getState) =>{

    dispatch({
        type: "UPDATE_DEFENSE",
        payload: data,
    });
    
}

const SetSpecialAttack = (data) => (dispatch, getState) =>{

    dispatch({
        type: "UPDATE_SPECIAL_ATTACK",
        payload: data,
    });
    
}

const SetSpecialDefense = (data) => (dispatch, getState) =>{

    dispatch({
        type: "UPDATE_SPECIAL_DEFENSE",
        payload: data,
    });
    
}

const SetSpeed = (data) => (dispatch, getState) =>{

    dispatch({
        type: "UPDATE_SPEED",
        payload: data,
    });
    
}

export {
    SetDesc, SetName, SetType, SetSegtype, SetHeight, SetWeight, Setartwork, Setpreview, SetFirstName,SetFirstDesc, SetSecondName, SetSecondDesc, SetHiddendName, SetHiddenDesc, SetHP, SetAttack, SetDefense, SetSpecialAttack,SetSpecialDefense, SetSpeed

}