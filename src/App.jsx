import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import "./App.css"
import { Route, Router, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"




const App = () => {



  return (
   <div>
    <h1>Welcome</h1>
     <Navbar />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}  />
        <Route path="/products" element={<Products />} />
     </Routes>

     <Footer />
   </div>
  

  
   



  
  )
}

export default App