import { Link } from 'react-router-dom'
function Links() {
    return (
        <>
            <Link className="nav-link" to="/">Inicio</Link>
            <Link className="nav-link" to="/cat/almuerzos">Almuerzos</Link>
            <Link className="nav-link" to="/cat/desayunos">Desayuno</Link>
        
        </>
    )
}
export default Links
