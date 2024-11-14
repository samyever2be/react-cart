import React from 'react';
import "../Styles/Footer.css"
const Footer = ()=>{
    return(
        <>
            <div className="footer">
                <div className='footer-col col-one'>
                    <h2>Tech-Shop</h2>
                    <p>Subscribe to our Email alert to receive early discount offers, and new products info</p>
                    <div className='subscribe-form'>
                        <form>
                            <input type="text" placeholder='Email Address'/>
                            <button className='btn'>Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className='footer-col col-two'>
                    <h4>Help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Track Order</a></li>
                        <li><a href="#">Cancel Order</a></li>
                        <li><a href="#">Return Order</a></li>
                        <li><a href="#">Warranty Info</a></li>
                    </ul>
                </div>
                <div className='footer-col col-three'>
                    <h4>Policies</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Track Order</a></li>
                    </ul>
                </div>
                <div className='footer-col col-four'>
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li>Contact Us</li>
                        <li>Service centers</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer;