import React from 'react'

const ItemDetail = ({descripcion}) => {


    return (
        <div>
            {descripcion.length === 0 ? <p>Cargando description</p> : descripcion.map((prod) => {
                return(
                    <div key={prod.id}>
                       
                        <p key={prod.description}>{prod.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemDetail
