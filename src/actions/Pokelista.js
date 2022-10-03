import axios from "axios";

export const Pokelista = (url) => async (dispatch, getState) =>{

    dispatch({
        type: "LOADING",
    });

    //const prueba = getState()

    // console.log(prueba)
    
 
    try{

        const peticion = await axios.get(url)
        let lista=[]
        
        for (let index of peticion.data.results){
            const resp = await axios.get(index.url)        
            
            if (resp.data.types.length > 1)     {
                lista.push({name: resp.data.name , img: resp.data.sprites.front_default, type: resp.data.types[0].type.name, sectype: resp.data.types[1].type.name, id: resp.data.id, weight: resp.data.weight/10, height:resp.data.height/10})
            }
            else{
                lista.push({name: resp.data.name , img: resp.data.sprites.front_default, type: resp.data.types[0].type.name, sectype: null, id: resp.data.id, weight: resp.data.weight/10, height:resp.data.height/10})
            }   
        }

        dispatch({
            type: "LOAD_DATA",
            payload: peticion.data,
            payload2: lista,
        });

        
        

    } catch(error){
        console.log(error)
    }

    
}
