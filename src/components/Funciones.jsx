import React from "react";
import axios from "axios";

//Explicación: hago una función que hace una petición, recibe los datos en la variable petición, y carga esos datos dentro del estado del componente, pero como no lo puede hacer directamente le pasamos el estado de los personajes que tenemos en el componente <Inicio> (en la función setPersonajes).

const Todoslospokemon = async (url,state,next,prev,total) =>{
    const peticion = await axios.get(url)
    next(peticion.data.next)
    prev(peticion.data.previous)
    total(peticion.data.count)
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
    state(lista) 
}




const UnicoPokemon = async(name, state,image,segtype,type,descripcion,abilitiesdescr,id,weight,height)=>{
    
    try{
        const peticion = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${peticion.data.id}.png`
        let prueba = []
        let prueba2 = []
        var filtrar = []
        var filtrar2 = []
        let grupo = []
        id(peticion.data.id)
        weight(peticion.data.weight/10)
        height(peticion.data.height/10)
        
        try{
            const pokedex = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${peticion.data.id}/`)

            
            prueba.push(pokedex.data.flavor_text_entries)

            filtrar = prueba[0].filter(x=>x.language.name.includes('en'))
            
            /* let final = filtrar.pop()
            console.log(final) */

            descripcion(filtrar[filtrar.length-1].flavor_text)



        
        }catch(error){
            descripcion("This Pokemon doesn't have a description yet")
        }

        
        

        if (peticion.data.types.length > 1)     {
            segtype(peticion.data.types[1].type.name)

        }
        else{
            segtype(null)
        }
        

        
        for (let index of peticion.data.abilities){
            const respabilities = await axios.get(index.ability.url)        
            for (let indice of respabilities.data.effect_entries){
                prueba2.push({effect: indice.effect, lang: indice.language.name, name: respabilities.data.name})
            }
            var i = 0    
                 
        }
        
        filtrar2 = prueba2.filter(x=>x.lang.includes('en'))

        
        abilitiesdescr(filtrar2)
        type(peticion.data.types[0].type.name)
        
        state(peticion.data)
        image(imagen)
    }catch (error){
        window.location.assign("/notfound");
    }
    
    
}

const Title =(context,title)=>{
    let titulo

    titulo=title.charAt(0).toUpperCase() + title.slice(1)
    return(
        document.title = context + titulo
    )
}

const MainTitle =()=>{
    
    
    return(       
        document.title = 'PokeFound'
    )
}


const Encontrar = async (state,dato) =>{
    const peticion = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=2000')
    const filtrar = peticion.data.results.filter(x=>x.name.includes(dato))
    let lista=[]

    
    for (let index of filtrar){
        const resp = await axios.get(index.url)

        lista.push({name: resp.data.name , img: resp.data.sprites.front_default, type: resp.data.types[0].type.name})
           
    }
    state(lista)
}


export {
    Todoslospokemon,
    UnicoPokemon,Title,MainTitle,Encontrar
}