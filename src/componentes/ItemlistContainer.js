import Botton from "./ItemCount"

const Container = ({nombre,apellido,stock,initial}) => {
    return (
        <div>
            <p>Hola soy el Container Bienvenido {nombre} {apellido}</p>
            <Botton stock={10} initial={1} onAdd={() => { alert("Gracias por tu compra")}}/>
            
        </div>
    )
}

export default Container

