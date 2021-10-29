import {useState, useEffect} from "react"

const Botton = () => {

    // const [saludo,setSaludo] = useState("Hola")
    const [contador,setContador] = useState(0)
    useEffect(() =>{
        console.log("Sea ha iniciado el contador")
    },[])
    const sumarcontador = () => {

        
        setContador(contador + 1)
        
    }
   

    const disminuircontador = () => {

        setContador(contador - 1)
        
    }
   
    return (
        <div>
            <button onClick={sumarcontador}>Aumentar</button>
            <button onClick={disminuircontador}>Disminuir</button>
            <p>{contador}</p>
        </div>
    )
}

export default Botton

