import React, {useState, useEffect, useContext} from 'react';
import { cartContext } from '../App';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import "../Styles/Viewcart.css";

const Viewcart = ()=>{
   const {cart, setCart}               = useContext(cartContext);
   const [total, setTotal]             = useState(0);
   const [actualprice, setActualprice] = useState(0);
   const [discount, setDiscount]       = useState(0);

   useEffect(()=>{
        const Originalprice  = cart.reduce((acc, curr)=> acc + parseInt(curr.originalPrice * curr.quantity),0);
        const Finalprice     = cart.reduce((acc, curr)=> acc + parseInt(curr.finalPrice  * curr.quantity),0);
       
        setTotal(Finalprice);
        setActualprice(Originalprice);
        setDiscount(Originalprice - Finalprice);     

   },[cart]);
    
   //Remove
    const handleRemove = (pid)=>{
    const result = cart.filter((product)=> product.id !== pid);
    setCart(result);
    }

   //Qty
  const handleIncrement = (id, qty) => {
    const updatedCart = cart.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
  
    setCart(updatedCart);

  };

  const handleDecrement = (id) => {
    setCart((prevCart) =>
      prevCart.map((product) => {
        if (product.id === id && product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      })
    );
  };

    return(
        <>
       
        <div className='cart-container'>
            <div className='left-side'>
                {cart.map((product)=>(

                <div className='cart-product' key={product.id}>
                    <div className='img'>
                        <img src={product.images[0]} alt={product.title}/>
                    </div>
                    <div className='cart-product-details'>
                        <h3><Link to={`/product/${product.id}`}>{product.title}</Link></h3>
                        <p>{product.info}</p>
                        <span className='price-wrapper'>
                            <p className='strike-rate'>&#8377;{product.originalPrice}</p>
                            <p>&#8377;{product.finalPrice}</p>
                        </span>
                         <div>
                            <button className='quantity qty-increment' onClick={()=>handleIncrement(product.id, product.quantity)}><strong>+</strong></button>
                            <button className='quantity'>{product.quantity}</button>
                            <button className='quantity qty-decrement' onClick={()=>handleDecrement(product.id)}><strong>-</strong></button>
                        </div>
                    </div>
                    <div className='delete' onClick={() => handleRemove(product.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                    </div>
                </div>      
            ))}
           </div>
           <div className='right-side'>
                <div className='summary-detail-container'>
                    <h5>Order Summary</h5>
                    <div className='summary-detail'>
                        <span>Original Price</span>
                        <span>&#8377;{actualprice}</span>
                    </div>
                    <div className='summary-detail'>
                        <span>
                            Discount
                        </span>
                        <span className='green'>&#8377;{discount}</span>
                    </div>
                    <div className='summary-detail'>
                        <span>
                            Delivery
                        </span>
                        <span className='green'>Free</span>
                    </div>
                    <hr/>
                    <div className='summary-detail'>
                        <h4>Total Price:</h4>
                        <span> &#8377; {total}</span>
                    </div>
                </div>
                {cart.length > 0 ? (
                    <div className="btn checkout">Checkout</div> 
                ) : (
                    <div>Your cart is empty</div>  // Or you can leave this empty if you prefer
                )}
           </div>           
                   
        </div>
        </>
    )
}

export default Viewcart;