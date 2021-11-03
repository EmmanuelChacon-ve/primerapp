
const ItemList = () => {
    const array = ["Mondongo ","Hallaca"]
    const promesa = new Promise ((res,rej) => {

        setTimeout(() => {res(array)}, 2000)
        
    })
    promesa.then(() => {console.log (array)})
    promesa.catch(() => {console.log ("La promesa ha llegado mal")})
            

    return (
        <div>
            <main>
            <p>Nombre del platillo {array}</p>
            </main>
        </div>
    )
}

export default ItemList
