import React,{useState} from 'react';
import Slider from "./Slider";
import data from './ProductData';
import Product from './Product';
import Carouselslider from './Carousalslider';
import "../Styles/Home.css";


const Home = ()=>{
    
    const [products,setProducts] = useState(data);

    const filterResult = (catItem)=>{
        const result = data.filter((curData)=>{      
            return curData.category === catItem;
        });
        setProducts(result);
             
    }

    return(
        <>
        <Slider/>
        <Carouselslider products={products}/>
        <div className="product-wrap">
            <div className="head">
                <h2>Top Products</h2>
            </div>
            <div className="catlist">
                <ul>
                    <li onClick={()=>setProducts(data)}>All</li>
                    <li onClick={()=>filterResult('Headphones')}>Headphones</li>
                    <li onClick={()=>filterResult('Earbuds')}>Earbuds</li>
                    <li onClick={()=>filterResult('Earphones')}>Earphones</li>
                    <li onClick={()=>filterResult('Neckbands')}>Neckbands</li>
                </ul>
            </div>
            <div className='product-container'>
            
            {products.length > 0 ? (
            products.map((product) => (
                <Product key={product.id} product={product} />
            ))
            ) : (
                <p>No products found</p>
            )}
            </div>
        </div>
        </>
    )
}

export default Home