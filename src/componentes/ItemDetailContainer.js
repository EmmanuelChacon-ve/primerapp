import React from 'react'

const ItemDetailContainer = () => {

    const [productos, setProductos] = useState([])
        
    const data = () =>{
        console.log("hola")
        fetch("../datos.json")
       
       .then((response)=>{
           console.log(response)
            return response.json()

        })
        
        .then((mydata)=> {
            
            setProductos(mydata)
        })        
   }    

   useEffect(() => {
       setTimeout(()=>{
           data()
       }, 3000)
       
   }, [])
    
    return (
        <div>
            <ItemList productos={productos}/>
        </div>
    )
 
}
export default ItemDetailContainer
