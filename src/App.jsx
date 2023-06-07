import { useState } from 'react';
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Service from './components/Service';
import Contact from "./components/Contact";
import Location from "./components/Location";
import ProductList from "./components/ProductList";
import Navbar from './components/Navbar';
import UpperHeader from './components/UpperHeader';
// import "./UpperHeader.css"
import "./App.css";
import Footer from './components/Footer';
import Login  from "./components/Login";
import Register from "./components/Register";
import ProductListApi from './components/ProductListApi';
import Cart from "./components/Cart";



 function App(){
   return(
    <>
    <UpperHeader/>
    <Navbar/>
   <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/service" element={<Service/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
    <Route exact path="/location" element={<Location/>}/>
    <Route exact path="/productlist" element={<ProductList/>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/register" element={<Register/>}/>
    <Route exact path="/productlistapi" element={<ProductListApi/>}/>
    <Route exact path="/cart" element={<Cart/>}/>




   </Routes>
   <Footer/>
    </>
   );
 }
      
  

export default App;
