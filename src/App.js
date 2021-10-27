import Header  from  "./componentes/NavBar"
import Footer from "./componentes/Footer"
import Container from "./componentes/ItemlistContainer"


const App = () => {
    return(
        <>
            <Header nombre="Emmanuel"
             apellido="Chacon"/>
             <Container nombre="Emmanuel"
             apellido="Chacon"/>
            <Footer/>
        </>
    )
}
export default App