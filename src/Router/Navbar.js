import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { cartContext } from '../App';
const Navbar = ()=>{
    const {cart} = useContext(cartContext);
    return(
        <div>
            <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/cart">
                {cart.length > 0 ? (
                <span className='cart-count'>{cart.length}</span>
                ) : ""
                }
                <FontAwesomeIcon icon={faCartShopping} />View Cart</Link></li>
                <li><Link to="/contact">contact</Link></li>
            </ul>
            </>
        </div>
    )
}

export default Navbar;