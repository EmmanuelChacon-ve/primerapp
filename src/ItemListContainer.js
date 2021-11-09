import {useEffect,useState} from "react"
import { useParams } from "react-router"
import ItemList from "./ItemList"



const ItemListContainer = () => {

    const {cat} = useParams()

    const [productos, setProductos] = useState([])

    useEffect(() => {

        setTimeout(() => {

            if (cat === "almuerzos") {

                fetch("../Datos.json")

                    .then(function (response) {

                        return response.json()

                    })

                    .then(function (myJson) {

                        setProductos(myJson)

                    })

            } else if (cat === "desayunos") {

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

   
            <ItemList productos = {productos} />
            </>
    )

}

export default ItemListContainer
