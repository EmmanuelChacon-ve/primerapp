import Header  from  "./componentes/NavBar"
import Footer from "./componentes/Footer"
import ItemList from "./componentes/ItemList"
import Item from "./componentes/Item"
import Container from "./componentes/ItemlistContainer"







const App = () => {
    return(
        <>
            <Header nombre="Emmanuel"
             apellido="Chacon"/>
             <Container/>
            <Footer/>
            
            
        </>
    )
}
export default App