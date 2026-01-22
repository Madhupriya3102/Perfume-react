import Navbar from "./components/Navbar"
import Search from "./components/search"
import About from "./components/about"
import Product from "./components/product"
import Footer from "./components/footer"






function App()
{
    return(
        <div>
            <Navbar></Navbar>
    <Search></Search>
    
    <Product></Product>
    <About></About>
   <Footer></Footer>
        </div>
    )
}
export default App