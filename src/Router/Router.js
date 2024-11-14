import React, {useState, createContext} from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from "../Components/Home";
import Shop from "../Components/Shop";
import Viewcart from "../Components/Viewcart";
import data from '../Components/ProductData';
import ProductDetail from '../Components/ProductDetail';
export const cartContext = createContext();
const Router = ()=>{
    const [products,setProducts] = useState(data);

    return(
   
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop products={products}/>}/>
            <Route path="/product/:id" element={<ProductDetail products={products} />} />
            <Route path="/cart" element={<Viewcart/>}/>
        </Routes>
  
    )
}

export default Router;