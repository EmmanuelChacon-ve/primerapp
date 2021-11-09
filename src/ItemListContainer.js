import {useEffect,useState} from "react"
import { useParams } from "react-router"
import ItemList from "./ItemList"
import ItemFilter from "./ItemFilter"


const ItemListContainer = () => {

    const {cat} = useParams()

    const [productos, setProductos] = useState([])

    useEffect(() => {

        setTimeout(() => {

            if (cat === "suplementos") {

                fetch("../Datos.json")

                    .then(function (response) {

                        return response.json()

                    })

                    .then(function (myJson) {

                        setProductos(myJson)

                    })

            } else if (cat === "controlpeso") {

                fetch("../Datos2.json")

                    .then(function (response) {

                        return response.json()

                    })

                    .then(function (myJson) {

                        setProductos(myJson)

                    })
            } else

                fetch("../Datos3.json")

                .then(function (response) {

                    return response.json()

                })

                .then(function (myJson) {

                    setProductos(myJson)

                })

        }, 2000)

    }, [cat])

    return (
            <>
            <ItemFilter />
            <ItemList productos = {productos} />
            </>
    )

}

export default ItemListContainer
