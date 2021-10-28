import Botton from "./ItemCount"
import ItemList from "./ItemList"
const Container = ({nombre,apellido}) => {
    return (
        <div>
            <p>Hola soy el Container Bienvenido {nombre} {apellido}</p>
            <Botton/>
            <ItemList/>
        </div>
    )
}

export default Container
