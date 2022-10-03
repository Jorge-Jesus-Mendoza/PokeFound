import Default_perfil from "./Default_perfil"

const PerfilReducer =( state = Default_perfil, action)=>{
    switch(action.type){
        case "LOAD_DATA_PERFIL": return{
            persona: action.payload,
            image: action.payload2,
            type: action.payload.types[0].type.name,
            segtype: action.payload4,
            pokedescripcion: action.payload3,
            abilitiesdes: action.payload5,
            id: action.payload.id,
            weight: action.payload.weight/10,
            height: action.payload.height/10
        }
        case "LOADING_PERFIL": 
            return state;


        default: return state;
    }
}

export default PerfilReducer