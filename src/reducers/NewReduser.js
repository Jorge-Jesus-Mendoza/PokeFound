import Default_new from "./Default_new";

const NewReduser =( state = Default_new, action)=>{
    switch(action.type){
        case "SET_DATA_TO_UPDATE": return{

            name: action.payload.name,
            img: action.payload.img,
            type: action.payload.type,
            sectype: action.payload.sectype,
            weight: action.payload.weight,
            height: action.payload.height,
            imagen: action.payload.imagen,
            pokedescripcion: action.payload.pokedescripcion,
            abilitiesdes: action.payload.abilitiesdes,
            stats: action.payload.stats

        }
        case "RESET_NEW_DATA": 
            return Default_new;


        default: return state;
    }
}

export default NewReduser