import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import ProductCategory from './pages/ProductCategory';
import Cart from './pages/Cart';
import men_banner from "./Assets/images/banner_mens.png"
import women_banner from "./Assets/images/banner_women.png"
import kid_banner from "./Assets/images/banner_kids.png"
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProductDetails from './components/ProductDetails';


const App = ()=>{
  return(
    // <div>
    //   <Home/> 
    // </div>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/login' element ={<Login/>}/>
        <Route path= '/signup' element = {<SignUp/>}/>
        <Route path="/men" element={<ProductCategory banner={men_banner} category="men"/>}/>
        <Route path="/women" element={<ProductCategory banner={women_banner} category="women"/>}/>
        <Route path="/kids" element={<ProductCategory banner={kid_banner} category="kid"/>}/>
        <Route path='/product/:id' element = {<ProductDetails/>}>
        </Route>
        <Route path = "/cart" element = {<Cart/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
export default App;