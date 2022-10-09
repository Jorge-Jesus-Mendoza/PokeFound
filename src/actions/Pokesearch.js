import axios from "axios";


export const Pokesearch = (search) => async (dispatch, getState) =>{

    dispatch({
        type: "NO_SEARCH",
    });

    //const prueba = getState()

    // console.log(prueba)
    
 
    try{
        
        const first = await axios.get("http://localhost:5000/results")
        const filtrar2 = first.data.filter(y=>y.name.includes(search))
       

        
        dispatch({
            type: "SEARCH",
            payload: filtrar2,
        });

        
        

    } catch(error){
        console.log(error)
    }

    
}
