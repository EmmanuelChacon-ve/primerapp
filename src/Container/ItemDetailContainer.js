import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { firestore } from "../Data/firebase"
import ItemDetail from "../Componets/Item/ItemDetail"


const ItemDetailContainer = () => {

    const [detalles, setDetalles] = useState([])

    const {id} = useParams()

    useEffect(() => {
      
      const db = firestore
      db.collection("productos").doc(id).get()
        .then(res => {
          setDetalles([{
            id: res.id,
            ...res.data()
          }])
        })
        .catch(err => console.log(err))

    }, [id]);

    return (

        <ItemDetail detalles = { detalles } />

    )

}

export default ItemDetailContainer