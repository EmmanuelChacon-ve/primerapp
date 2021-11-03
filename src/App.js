import Header  from  "./componentes/NavBar"
import Footer from "./componentes/Footer"
import Container from "./componentes/ItemlistContainer"
import Item from "./componentes/Item"





const App = () => {
    return(
        <>
            <Header nombre="Emmanuel"
             apellido="Chacon"/>
             <Container/>
             <Item/>
            <Footer/>
            
        </>
    )
}
export default App