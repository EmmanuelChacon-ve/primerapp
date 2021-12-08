import { useContext } from 'react'
import { contexto } from '../../Context/cartContext'
import {NavLink} from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'

const CartWidget = () => {
  
    const {sumQuantity} = useContext(contexto)
 
    return (
        <>
            <NavLink to="/cart" exact>
                <span className="material-icons carritoIcon">
                    shopping_cart
                </span>
            </NavLink>
            {sumQuantity() === 0 ? null :
                <Badge className="badgeCart" bg="danger">
                    {sumQuantity()}
                </Badge>
            }
        </>
        
    )
}

export default CartWidget



