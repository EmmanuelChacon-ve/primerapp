import { Link } from 'react-router-dom'

function Links() {
    return (
        <>
            <Link className="nav-link" to="/">Inicio</Link>
            <Link className="nav-link" to="/categoria/Almuerzo">Almuerzos</Link>
            <Link className="nav-link" to="/categoria/Desayuno">Desayunos</Link>

        </>
    )
}

export default Links
