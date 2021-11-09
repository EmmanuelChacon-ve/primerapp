import {useEffect,useState} from "react"
import { useParams } from "react-router"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [detalles, setDetalles] = useState([])

    const {id} = useParams()

    useEffect(() => {

        setTimeout(() => {
            
            fetch(`https://618adae634b4f400177c48f2.mockapi.io/api/v1/element?id=${id}`)

            .then(function (response) {

                return response.json()

            })

            .then(function (myJson) {

                setDetalles(myJson)

            })

        }, 2000);

    }, [id]);

    return (

        <ItemDetail detalles = { detalles } />
    )

}

export default ItemDetailContainer
