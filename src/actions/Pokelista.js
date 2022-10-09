import axios from "axios";

export const Pokelista = (url) => async (dispatch, getState) =>{

    dispatch({
        type: "LOADING",
    });

    //const prueba = getState()

    // console.log(prueba)
    
 
    try{

        const peticion2 = await axios.get(url)

        const test = await axios.get("http://localhost:5000/count/1")
        const first = await axios.get("http://localhost:5000/results?_start=0&_end=20")

        let prueba = {total: 1154}
        //const text = await axios.put("http://localhost:5000/count/1",prueba)
        /* 
        console.log(test.data.total)
        console.log(peticion2.data.results)
        console.log(first.data) */
        
        
        
        

        dispatch({
            type: "LOAD_DATA",
            payload: peticion2.data,
            payload2: test.data.total,
        });

        
        

    } catch(error){
        console.log(error)
        window.location.assign("/ErrorServer");
    }

    
}
