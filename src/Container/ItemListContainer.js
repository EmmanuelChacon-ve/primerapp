import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { firestore } from "../Data/firebase"
import ItemList from "../Componets/Item/ItemList"


const ItemListContainer = () => {

    const {categoria} = useParams()

    const [productos, setProductos] = useState([])

    useEffect(() => {
        if (categoria) {

            const db = firestore
            db.collection("productos").where("category", "==", categoria).get()
                .then(res => {
                    setProductos(res.docs.map(producto => ({
                        id: producto.id,
                        ...producto.data()
                    })))
                })
                .catch(err => console.log(err))
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
