import axios from "axios";


export const Pokesearch = (search) => async (dispatch, getState) =>{

    dispatch({
        type: "NO_SEARCH",
    });

    //const prueba = getState()

    // console.log(prueba)
    
 
    try{
        const peticion = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=2000')
        const filtrar = peticion.data.results.filter(x=>x.name.includes(search))
        let lista=[]

        
        for (let index of filtrar){
            const resp = await axios.get(index.url)

            lista.push({name: resp.data.name , img: resp.data.sprites.front_default, type: resp.data.types[0].type.name})
            
        }
        dispatch({
            type: "SEARCH",
            payload: lista,
        });

        
        

    } catch(error){
        console.log(error)
    }

    
}
