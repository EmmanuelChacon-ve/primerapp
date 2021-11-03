import {useState, useEffect} from "react"



const Botton = ({initial,stock,onAdd}) => {

    
  

    const [contador,setContador] = useState(initial)
    useEffect(() =>{
        console.log("Sea ha iniciado el contador")
    },[])

    if(contador >= stock){
        alert("no hay mas productos")
        
    }

    
    const sumarcontador = () => {

        if(contador===stock){
            setContador(contador)       
        }
        else{
            setContador(contador + 1)
        }
        


        
    }
   

    const disminuircontador = () => {

        setContador(contador - 1)
        
    }

    
    

    
   
   
    return (
        <div>
            <button onClick={sumarcontador}>Aumentar</button>
            <button onClick={disminuircontador}>Disminuir</button>
            <button onClick={() => onAdd()}>Agregar a carrito</button>
            <p>{contador}</p>
            
        </div>
    )
}

export default Botton

