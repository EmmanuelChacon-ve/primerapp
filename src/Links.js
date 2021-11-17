import { Link } from 'react-router-dom'

function Links() {
    return (
        <>
            <Link className="nav-link" to="/">Inicio</Link>
            <Link className="nav-link" to="/categoria/almuerzos">Almuerzos</Link>
            <Link className="nav-link" to="/categoria/desayunos">Desayunos</Link>

        </>
    )
}

export default Links
