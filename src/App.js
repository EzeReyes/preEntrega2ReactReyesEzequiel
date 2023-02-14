// REACT ROUTER DOM
import { BrowserRouter, Routes, Route } from "react-router-dom";


// PAGES
import Home from "./components/pages/Home/Home";
import Contact from "./components/pages/Contact/Contact";
import About from "./components/pages/About/About";
import CardDetail from "./components/pages/CardDetail/CardDetail";


// COMPONENTS
import "./App.css";
import Navbar from "./components/Navbar"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cart from "./components/pages/Cart/Cart";

function App() {
  return (
    <BrowserRouter>    
      <div className="App-Body">
        <Header/>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/detail/:id" element={<CardDetail/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
