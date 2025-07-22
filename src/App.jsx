import Navbar from "./componentes/Navbar/Navbar"
import {useState} from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home/Home.jsx'
import Cart from './pages/Cart/Cart.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'
import Footer from './componentes/Footer/Footer.jsx'
import LoginPopup from "./componentes/LoginPopup/LoginPopup.jsx"

function App() {
const [showLogin,setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
     <Navbar setShowLogin={setShowLogin}/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/cart" element={<Cart/>}/>
       <Route path="/order" element={<PlaceOrder/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
