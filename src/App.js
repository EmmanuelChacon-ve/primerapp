import Header  from  "./componentes/NavBar"
import Footer from "./componentes/Footer"
import Container from "./componentes/ItemlistContainer"
import {useState} from "react"

const App = () => {
    return(
        <>
            <Header Nombre="Emmanuel"
             Apellido="Chacon"/>
             <Container Nombre="Emmanuel"
             Apellido="Chacon"/>
            <Footer/>
        </>
    )
}
export default App