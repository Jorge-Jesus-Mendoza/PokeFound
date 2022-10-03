import Default_setdata from "./Default_setdata"

const Asignador_data =( state = Default_setdata, action)=>{
    switch(action.type){
        case "LOAD_DATA": return{
            
            ...state,
            imgs: action.payload2,
            next: action.payload.next,
            previous: action.payload.previous,
            totalpokemon: action.payload.count
        }
        case "UPLOAD_URL": return{
            
            ...state,
            url: action.payload
            
        }

        case "SET_SELECTER": return{
            
            ...state,
            selected: action.payload
            
        }

        case "LOADING": 
            return state;


        default: return state;
    }
}

export default Asignador_data