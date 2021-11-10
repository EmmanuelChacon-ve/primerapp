import { useContext } from 'react'
import { contexto } from './cartContext'

const CartWidget = () => {


    const { cart } = useContext(contexto)
    
    console.log(cart) 

    
    return (
        <span className="material-icons carritoIcon">
            shopping_cart
        </span>
    )
}

export default CartWidget
