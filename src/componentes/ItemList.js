import Item from "./Item";
const ItemList = () => {
    const promesa = new Promise ((res,rej) => {
        setTimeout(() => {res(Item)}, 2000)
        
    })
    promesa.then(() => {console.log (Item)})
    promesa.catch(() => {console.log ("La promesa ha llegado mal")})
    return (
        <div>


        </div>
    )
}

export default ItemList
