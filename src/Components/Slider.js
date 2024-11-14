import React, {useState} from 'react';
import data from './ProductData';
import "../Styles/Slider.css";
import { Link } from 'react-router-dom';
const Slider = ()=>{
    const[products] = useState(data); //productData  
    var [index, setIndex] = useState(0);  
    const {id,heroImage,title, info, finalPrice,originalPrice } = products[index];
    const Previous = ()=>{
        if(index <=0){
            index = 3;
            setIndex(--index);
        }else{
            setIndex(--index);
        }
    }
    const Next =()=>{
        if(index >=2){
            index =  -1
            setIndex(++index);
        }else{
            setIndex(++index);
        }
    }
    return(
        <>
            <div className='home-banner'>
                <div className='container'>  
                    <div className='content'>                       
                        <div  key={id} className='slide'>
                            <div className='navigator'>
                                <span><button onClick={()=>Previous()} class="btn-prev-arrow"></button></span>
                            </div> 
                            <div className='sliderbox'> 
                                <div className='left-box'>
                                    <h3>{title}</h3>
                                    <div className='info'>{info}</div>
                                    <span className='price-wrapper'>
                                        <p className='strike-rate'>&#8377; {originalPrice}</p>
                                        <p>&#8377;{finalPrice}</p>
                                    </span>
                                    <button className='btn'><Link to="/shop">Shop Now</Link></button>
                                </div>
                                <div className='right-box'>
                                    <img src={heroImage}/>
                                </div>
                            </div>
                            <div className='navigator'>                       
                                <span><button onClick={()=>Next()} class="btn-next-arrow"></button></span>
                            </div>
                        </div>
                    </div>
                   
                </div> 
                
            </div>
        </>
    );
}
export default Slider;