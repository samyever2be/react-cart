import React from 'react';
import '../Styles/Product.css';
import {useContext} from "react";
import { cartContext } from '../App';
import { Link } from 'react-router-dom';

const Product = ({product})=>{
    const {cart, setCart} = useContext(cartContext);
    const title = product.title.length > 21 ? product.title.substring(0,20)+".." : product.title;
    const addCart = ()=>{
        setCart([...cart, product]);
    }
    const removeCart = ()=>{
        setCart(cart.filter((c)=> c.id !== product.id));
    }

    return(
       
            <div className='product'>
            
                <div className='img'>            
                    <img src={product.images[0]} alt={product.title} />                            
                </div>
                <div className='details'>
                    <h3><Link to={`/product/${product.id}`}>{title}</Link></h3>
                    <span className='info'>{product.info}</span>
                    <hr/>
                    <span className='price-wrapper'>
                    <p className='strike-rate'>&#8377;{product.originalPrice}</p>
                    <p>&#8377;{product.finalPrice}</p>
                    </span>
                    {cart.includes(product) ? (
                        <button className="btn btnRemove" onClick={removeCart}>Remove from Cart</button>
                    ): (               
                        <button className="btn" onClick={addCart}>Add to Cart</button>
                    )}
                </div>
            </div>
        
    )

}

export default Product;