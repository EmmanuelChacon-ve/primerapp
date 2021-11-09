import { Link } from "react-router-dom"
import {useState} from "react"
import Button from 'react-bootstrap/Button'

const ItemCount = ( { initial, stock, prodID, onAdd } ) => {

    const [contador, setContador] = useState(initial)
    const [cambiarBoton, setCambiarBoton] = useState(false)
    const buttonAdd = document.getElementById('sumaCant')
    const buttonRemove = document.getElementById('restaCant')

    const sc = () => {

        if (stock === contador) {

            buttonAdd.disable = true

        } else {

            setContador(contador + 1)

        }
    }

    const rc = () => {

        if (contador === 1) {

            buttonRemove.disable = true

        } else {

            setContador(contador - 1)

        }
    }

    const agregar = () => { 

        onAdd(contador)
        setCambiarBoton(true)    
    
    }


    return (
        <>
        { !cambiarBoton ?
        <>
            <div className="controlCantidad">
                <Button variant="outline-info" id="restaCant" className="buttonCant material-icons"
                    onClick={rc}>remove</Button>
                {<p id={`prod${prodID}`} className="cantProd rounded border border-info">{contador}</p>}
                <Button variant="outline-info" id="sumaCant" className="buttonCant material-icons"
                    onClick={sc}>add</Button>
            </div>
            <div onClick={ agregar } className="agregarCarrito">
                <Button variant="info">Agregar al carrito</Button>
            </div>
            <Link to="/">
                <Button className="botonVolver material-icons" variant="info">keyboard_return</Button>
            </Link>
        </>
        :
        <>
            <div className="finContinua">
                <Link to="/cart">
                    <Button variant="info">Ir al carrito</Button>
                </Link>
                <Link to="/">
                    <Button variant="info">Continuar comprando</Button>
                </Link>
            </div>
        </>}
        </>
    )
}

export default ItemCount
