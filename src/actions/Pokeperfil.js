import axios from "axios";


export const Pokeperfil = (name) => async (dispatch, getState) =>{
    dispatch({
        type: "LOADING_PERFIL",
    });

    try{
        const peticion = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${peticion.data.id}.png`
        let prueba = []
        let prueba2 = []
        var filtrar = []
        var filtrar2 = []
        let grupo = []
        let descripcion=null
        let segtype= null
        try{
            const pokedex = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${peticion.data.id}/`)

            
            prueba.push(pokedex.data.flavor_text_entries)

            filtrar = prueba[0].filter(x=>x.language.name.includes('en'))
            
            /* let final = filtrar.pop()
            console.log(final) */

            descripcion = filtrar[filtrar.length-1].flavor_text



        
        }catch(error){
            descripcion = "This Pokemon doesn't have a description yet"
        }

        
        

        if (peticion.data.types.length > 1)     {
            segtype = peticion.data.types[1].type.name

        }
        else{
            segtype= null
        }
        

        
        for (let index of peticion.data.abilities){
            const respabilities = await axios.get(index.ability.url)        
            for (let indice of respabilities.data.effect_entries){
                prueba2.push({effect: indice.effect, lang: indice.language.name, name: respabilities.data.name})
            }
            var i = 0    
                 
        }
        
        filtrar2 = prueba2.filter(x=>x.lang.includes('en'))


        dispatch({
            type: "LOAD_DATA_PERFIL",
            payload: peticion.data,
            payload2: imagen,
            payload3: descripcion,
            payload4: segtype,
            payload5: filtrar2,
        });

    }catch (error){
        console.log(error)
        window.location.assign("/notfound");
    }
    
    
}