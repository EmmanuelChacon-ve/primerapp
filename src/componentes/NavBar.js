import Nav from "./Nav"
import Imagen from "./CartWidget"
const  Header = ({Nombre,Apellido}) => {
    
    return(
        <header>
           
            <h1>E-commerce</h1>
            <p>Bienvenido {Nombre} {Apellido}</p>
            <img src={"imagen.png"} />
            <Nav/>
        
        </header>
    )
}

export default Header