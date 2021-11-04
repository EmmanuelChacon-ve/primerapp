
import { useState , useEffect} from "react"
import ItemList from "./ItemList"
import Item from "./Item"
const Container = () => {


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
    
return(
    
        <ItemList productos={productos}/>

)

    }


export default Container

