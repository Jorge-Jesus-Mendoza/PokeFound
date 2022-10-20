import Default_perfil from "./Default_perfil"

const PerfilReducer =( state = Default_perfil, action)=>{
    switch(action.type){
        case "LOAD_DATA_PERFIL": return{
            pokemon: action.payload,
            image: action.payload.imagen,
            type: action.payload.type,
            segtype: action.payload.sectype,
            pokedescription: action.payload.pokedescripcion,
            abilitiesdes: action.payload.abilitiesdes,
            id: action.payload.id,
            weight: action.payload.weight/10,
            height: action.payload.height/10
        }
        case "LOADING_PERFIL": 
            return Default_perfil;


        default: return state;
    }
}

export default PerfilReducer