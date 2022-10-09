import Default_setdata from "./Default_setdata"

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

        case "LOADING": 
            return{
                ...state,
                imgs:null,
                
                
            }


        default: return state;
    }
}

export default Asignador_data