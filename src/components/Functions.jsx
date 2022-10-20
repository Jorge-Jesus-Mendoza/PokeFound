
const Title =(context,title)=>{
    let head

    head=title.charAt(0).toUpperCase() + title.slice(1)
    return(
        document.title = context + head
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