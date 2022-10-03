
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




export {
    Title,MainTitle
}