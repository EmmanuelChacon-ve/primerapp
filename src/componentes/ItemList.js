import Container from "./ItemlistContainer"
import ItemCount from "./ItemCount"
import Item from "./Item"
 
const ItemList = ({productos}) => {
   
  
      

    return (
        
        <div>
             {/* <Container  prod={() => { 
                 if(productos.length === 0){
                    return( <div><p>Cargando Productos</p></div>)
                   
                }

                else{
                    return ( */}
                        <div>
                            <main>
                                {productos.length === 0 ? <p>Cargando Productos</p> :  productos.map((prod) =>{
                                
                                return(

                                    // <div key={prod.id} className="borde">
                                        
                                    //     <p key={prod.name}>{prod.name}</p>
                                        <Item prod={prod}/>
                                    //     <p key={prod.precio}>{prod.precio}</p>
                                        
                                    //     <ItemCount stock={10} initial={1} onAdd={() => { alert("Gracias por tu compra")}}/>
                                    //     <img key={prod.url} alt="img" src={prod.url}/>

                                    // </div>
                                )
                            }
                            
                           
                            )}
                           
                            </main>
                        </div>
                    {/* ) */}
                {/* } */}
            {/* }}/> */}
        </div>
    )
}

export default ItemList
