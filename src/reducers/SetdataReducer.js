import Default_setdata from "./Default_setdata"
import Url from "../config/Url"

const Asignador_data =( state = Default_setdata, action)=>{
    switch(action.type){
        case "LOAD_DATA": return{
            
            ...state,
            imgs: action.payload,
            totalpokemon: action.payload2
        }
        
        case "UPLOAD_URL": return{
            
            ...state,
            url: action.payload
            
        }

        case "UPDATE_INDIVIDUAL_POKEMON": return{
            
            ...state,
            update: action.payload
            
        }

        case "SET_SELECTER": return{
            
            ...state,
            selected: action.payload
            
        }

        case "MODIFY_POKEMON_DATA": return{
            
            ...state,
            totalpokemon: action.payload
            
        }

        case "FILTER_POKEMON_LIST": return{
            
            ...state,
            filter: action.payload
            
        }

        case "SET_TYPE_TO_FILTER_THE_LIST": return{
            
            ...state,
            type: action.payload
            
        }

        case "SET_SECOND_TYPE_TO_FILTER_THE_LIST": return{
            
            ...state,
            sectype: action.payload
            
        }

        case "RESET_POKEDEX": return{
            
            ...state, 
            url: `${Url}?_start=0&_limit=20`,
            selected: 0,
            filter: false
            
        }

        case "LOADING": 
            return{
                ...state,
                imgs:null,
                
                
            }


        default: return state;
    }
}

export default Asignador_data