import Default_Pokemonlist from "./Default_Pokemonlist"

const PokemonListReducer =( state = Default_Pokemonlist, action)=>{
    switch(action.type){
        case "LOAD_FULL_POKEMON_LIST_DATA": return{
            
            ...state,
            list: action.payload,
            totalpokemon: action.payload2
        }

        case "LOADING_FULL_POKEMON_LIST": 
            return{
                ...state,
                list:null
            }

        case "DELETE_A_POKEMON_FROM_THE_LIST": 
            return{
                ...state,
                list: action.payload
            }
            
        default: return state;
    }
}

export default PokemonListReducer