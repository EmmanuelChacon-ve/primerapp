import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <footer className="text-center">
            <Link className="nav-link" to="/">Inicio</Link>
            <p>Gochilandia &copy;</p>
            
        </footer>
    )
}

export default Footer