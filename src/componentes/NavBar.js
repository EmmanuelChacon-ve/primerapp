import Nav from "./Nav"
import Imagen from "./CartWidget"
const  Header = ({nombre,apellido}) => {
    
    return(
        <header>
           
            <h1>E-commerce</h1>
            <p>Bienvenido {nombre} {apellido}</p>
            <Imagen/>
            <Nav/>
        
        </header>
    )
}

export default Header