import React, {useContext} from 'react';
import {  useParams } from "react-router-dom";
import "../Styles/ProductDetail.css";
import { cartContext } from '../App';

const ProductDetail = ({products})=>{
    let { id } = useParams();
    const product   = products.find((product) => product.id === parseInt(id));
    const imageList = product.images;
    const {cart, setCart} = useContext(cartContext);
    const addCart = ()=>{
        setCart([...cart, product]);
    }
    const removeCart = ()=>{
        setCart(cart.filter((c)=> c.id !== product.id));
    }
    return(
        <div className="product-detail-container">
         
            <div className='product-detail-wrap'>
                <div className="left-side">
                    <ul>
                        {imageList.length > 0 ? (
                            imageList.map((image,index) => (
                        <li key={index}><img src={image}/></li>
                        ))
                        ) : (
                            <li>No image found</li>
                        )}
                    </ul>
                    <div className="image-zoom">
                        <img src={product.heroImage} alt={product.title}/>
                    </div>
                </div>
                <div className="right-side">
                    <div className='container'>
                        <div className=''>
                            <h3>{product.title}</h3>
                            <p>{product.info}</p>
                            <hr/>
                        </div>
                        <div className=''>
                            <span className='price-wrapper'>
                            <p className='strike-rate'>&#8377;{product.originalPrice}</p>
                            <p>&#8377;{product.finalPrice}</p>
                            </span>
                            <hr/>
                        </div>
                        <div className=''>
                        {cart.includes(product) ? (
                        <button className="btn btnRemove" onClick={removeCart}>Remove from Cart</button>
                            ): (               
                                <button className="btn" onClick={addCart}>Add to Cart</button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail;