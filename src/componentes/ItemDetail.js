import React from 'react'

const ItemDetail = ({productos = []}) => {

   

    return (
        <div>
            {productos.length === 0 ? <p>Cargando description</p> : productos.map((prod) => {
                return(
                    <div>
                        <p key={prod.id}></p>
                        <p key={prod.description}></p>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemDetail
