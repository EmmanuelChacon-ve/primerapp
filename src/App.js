import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from "./Componets/Navbar/Header"
import ItemListContainer from "./Container/ItemListContainer"
import ItemDetailContainer from "./Container/ItemDetailContainer"
import Cart from "./Componets/Carts/Cart"
import Footer from "./Componets/Footer/Footer"
import { CustomProvider } from "./Context/cartContext"

const App = () => {

    return (
        <BrowserRouter>
            <CustomProvider>
                <Header />
                <Switch>
                    <Route path="/" component={ ItemListContainer } exact />
                    <Route path="/categoria/:categoria" component={ ItemListContainer } />
                    <Route path="/item/producto:id" component={ ItemDetailContainer } />
                    <Route path="/cart" component={ Cart } />
                </Switch>
                <Footer />
            </CustomProvider>
        </BrowserRouter>
    )
}

export default App
