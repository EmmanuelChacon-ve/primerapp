import React from 'react'
import ItemDetail from './ItemDetail'
import { useState , useEffect} from "react"

const ItemDetailContainer = () => {

    const [descripcion, setDescipcion] = useState([])
        
    const data = () =>{
        console.log("hola")
        fetch("../datos.json")
       
       .then((response)=>{
           console.log(response)
            return response.json()

        })
        
        .then((mydata)=> {
            
            setDescipcion(mydata)
        })        
   }    

   useEffect(() => {
       setTimeout(()=>{
           data()
       }, 3000)
       
   }, [])
    
    return (
        <div>
            <ItemDetail descripcion={descripcion}/>
        </div>
    )
 
}
export default ItemDetailContainer
