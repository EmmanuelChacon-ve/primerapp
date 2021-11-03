import React from 'react'

const ItemDetailContainer = () => {

    const resultado = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    console.log(resultado)
    resultado.then(() => {console.log ("todo bien")})
        
    
    return (
        <div>
            
        </div>
    )
 
}
export default ItemDetailContainer
