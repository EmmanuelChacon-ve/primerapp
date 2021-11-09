import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="text-center">
            <p>Gochilandia &copy;</p>
            <Link className="nav-link" to="/">Inicio</Link>
        </footer>
    )
}

export default Footer