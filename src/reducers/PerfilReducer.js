import Default_perfil from "./Default_perfil"

const PerfilReducer =( state = Default_perfil, action)=>{
    switch(action.type){
        case "LOAD_DATA_PERFIL": return{
            pokemon: action.payload,
            name: action.payload.name,
            img: action.payload.img,
            image: action.payload.imagen,
            type: action.payload.type,
            segtype: action.payload.sectype,
            pokedescription: action.payload.pokedescripcion,
            abilitiesdes: action.payload.abilitiesdes,
            id: action.payload.id,
            weight: action.payload.weight/10,
            height: action.payload.height/10,
            stats: action.payload.stats
        }
        case "UPDATE_NAME":
            return {

                ...state,
                name: action.payload
        }
        case "UPDATE_PREVIEW":
            return {

                ...state,
                img: action.payload
        }
        case "UPDATE_ARTWORK":
            return {

                ...state,
                image: action.payload
        }
        case "UPDATE_TYPE":
            return {

                ...state,
                type: action.payload
        }

        case "UPDATE_SECOND_TYPE":
            return {

                ...state,
                segtype: action.payload
        }

        case "UPDATE_DESCRIPTION":
            return {

                ...state,
                pokedescription: action.payload
        }

        case "UPDATE_WEIGHT":
            return {

                ...state,
                weight: action.payload
        }

        case "UPDATE_HEIGHT":
            return {

                ...state,
                height: action.payload
        }

        case "UPDATE_FIRST_ABILITY_NAME":
            return {
                ...state,
                abilitiesdes: state.abilitiesdes.map(
                    (ability, i) => i === 0 ? {...ability, name: action.payload} : ability
                )
            }

        case "UPDATE_FIRST_ABILITY_DESCRIPTION":
            return {
                ...state,
                abilitiesdes: state.abilitiesdes.map(
                    (ability, i) => i === 0 ? {...ability, effect: action.payload} : ability
                )
            }

        case "UPDATE_SECOND_ABILITY_NAME":
            return {
                ...state,
                abilitiesdes: state.abilitiesdes.map(
                    (ability, i) => i === 1 ? {...ability, name: action.payload} : ability
                )
            }

        case "UPDATE_SECOND_ABILITY_DESCRIPTION":
            return {
                ...state,
                abilitiesdes: state.abilitiesdes.map(
                    (ability, i) => i === 1 ? {...ability, effect: action.payload} : ability
                )
            }

        case "UPDATE_HIDDEN_ABILITY_NAME":
            return {
                ...state,
                abilitiesdes: state.abilitiesdes.map(
                    (ability, i) => i === 2 ? {...ability, name: action.payload} : ability
                )
            }

        case "UPDATE_HIDDEN_ABILITY_DESCRIPTION":
            return {
                ...state,
                abilitiesdes: state.abilitiesdes.map(
                    (ability, i) => i === 2 ? {...ability, effect: action.payload} : ability
                )
            }

        case "UPDATE_HP":
            return {
                ...state,
                stats: state.stats.map(
                    (stat, i) => i === 0 ? {...stat, base_stat: action.payload} : stat
                )
            }

        case "UPDATE_ATTACK":
            return {
                ...state,
                stats: state.stats.map(
                    (stat, i) => i === 1 ? {...stat, base_stat: action.payload} : stat
                )
            }

        case "UPDATE_DEFENSE":
            return {
                ...state,
                stats: state.stats.map(
                    (stat, i) => i === 2 ? {...stat, base_stat: action.payload} : stat
                )
            }

        case "UPDATE_SPECIAL_ATTACK":
            return {
                ...state,
                stats: state.stats.map(
                    (stat, i) => i === 3 ? {...stat, base_stat: action.payload} : stat
                )
            }

        case "UPDATE_SPECIAL_DEFENSE":
            return {
                ...state,
                stats: state.stats.map(
                    (stat, i) => i === 4 ? {...stat, base_stat: action.payload} : stat
                )
            }

        case "UPDATE_SPEED":
            return {
                ...state,
                stats: state.stats.map(
                    (stat, i) => i === 5 ? {...stat, base_stat: action.payload} : stat
                )
            }
        

        case "LOADING_PERFIL": 
            return Default_perfil;


        default: return state;
    }
}

export default PerfilReducer