import {NavLink, Link} from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'


const ItemFilter = () => {

    return (
        <Dropdown className="itemFilter text-center">
            <Dropdown.Toggle variant="warning" id="dropdown-basic" className="text-light">
                Filtrar categoría
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/cat/suplementos">Almuerzos</Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/cat/controlpeso">Desayunos</Dropdown.Item>
                <Dropdown.Item as={Link} to="/">Quitar filtro</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default ItemFilter
