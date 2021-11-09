import ItemList from "./ItemList"
import ItemCount from "./ItemCount"
import ItemDetailContainer from "./ItemDetailContainer"
const Item = ({prod}) => {
    return (

        <div key={prod.id} className="borde">                            
        <p key={prod.name}>{prod.name}</p>
        <p key={prod.description}>{prod.description}</p>
        <p key={prod.precio}>{prod.precio}</p>

        <ItemCount stock={10} initial={1} onAdd={() => { alert("Gracias por tu compra")}}/>
        <img key={prod.url} alt="img" src={prod.url}/>
        </div>
                                
  )
}

export default Item

