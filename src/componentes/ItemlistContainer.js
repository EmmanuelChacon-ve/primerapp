import Botton from "./ItemCount"
const Container = ({nombre,apellido}) => {
    return (
        <div>
            <p>Hola soy el Container Bienvenido {nombre} {apellido}</p>
            <Botton/>
        </div>
    )
}

export default Container
