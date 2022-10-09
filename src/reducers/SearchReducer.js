import Default_search from "./Default_search";

const SearchReducer =( state = Default_search, action)=>{
    switch(action.type){
        
        case "SEARCH": return{
            
            results: action.payload
        }

        case "NO_SEARCH": 
            return {
                results:null
            }
        
        default: return state;
    }
}

export default SearchReducer