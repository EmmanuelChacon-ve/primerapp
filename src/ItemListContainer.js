import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { firestore } from "./firebase"
import ItemList from "./ItemList"


const ItemListContainer = () => {

    const {categoria} = useParams()

    const [productos, setProductos] = useState([])

    useEffect(() => {

        // if (categoria){
        //     const db = firestore
            
        //      db.collection("categoria").get()
        //         .then(res => {
        //             setProductos(res.docs.map(producto => ({
        //                 id: producto.id,
        //                 ...producto.data(categoria)
        //             })))
        //         })
        //         .catch(err => console.log(err))
        // }
        //  else if (categoria){
        //     const db = firestore
        //      db.collection("desayuno").get()
        //     .then(res => {
        //         setProductos(res.docs.map(producto => ({
        //             id: producto.id,
        //             ...producto.data()
        //         })))
        //     })
        //     .catch(err => console.log(err))
        // }
            if (categoria === "almuerzos") {

                fetch("../Datos.json")

                    .then(function (response) {

                        return response.json()

                    })

                    .then(function (myJson) {

                        setProductos(myJson)

                    })

            } else if (categoria === "desayunos") {

                fetch("../Datos2.json")

                    .then(function (response) {

                        return response.json()

                    })

                    .then(function (myJson) {

                        setProductos(myJson)

                    })
      
         }
         else {
            const db = firestore
            db.collection("productos").get()
                .then(res => {
                    setProductos(res.docs.map(producto => ({
                        id: producto.id,
                        ...producto.data()
                    })))
                })
                .catch(err => console.log(err))
        }
    }, [categoria])

    return (
            <>
               
                <ItemList productos = {productos} />
            </>
    )

}

export default ItemListContainer
