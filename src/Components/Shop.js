import React, {useState, useEffect} from 'react';
import Product from './Product';
import "../Styles/Shop.css";
import "../Styles/Product.css";
const Shop = ({products}) =>{
    const [allItems, setAllItems] = useState(products);
    const[items, setItems] = useState(products); 
    //const [selectedCategory, setSelectedCategory] = useState(products); // Current category filter
    //const [selectedBrand, setSelectedBrand] = useState(products);   
    //sort by price
    const Sortby = (sortItem) => {
        const sortedItems = [...items].sort((a, b) => {
            if (sortItem === 'ASC') {
                return a.finalPrice - b.finalPrice; 
            } else if (sortItem === 'DESC') {
                return b.finalPrice - a.finalPrice;
            }
            return 0;
        });        
        setItems(sortedItems);

    };
    useEffect(() => {
        const fetchedItems = products; // Load the full data list
        setAllItems(fetchedItems);   // Store full data separately
        setItems(fetchedItems);      // Initialize the filtered data to full data
      }, []);

      const filterCat = (catItem) => {
        // Filter original state
        const result = allItems.filter((curData) => curData.category === catItem);
        setItems(result);
      };

      const filterBrand = (brandName) =>{
        const result = allItems.filter((curData) => curData.brand === brandName);
        setItems(result);
      } 

  

    
    return(
        <>
        
        <div className='shop-container'>
            <div className='left-side'>
                <div className='sidebar'>
                <h5>Sort By</h5>
                <hr/>
                <div className='filter-wrapper'>
                    <ul>
                        <li>Latest</li>
                        <li>Featured</li>
                        <li onClick={()=>Sortby('ASC')}>Price(Lowest First)</li>
                        <li onClick={()=>Sortby('DESC')}>Price(Highest First)</li>
                    </ul>
                </div>
                <h4>Filter By</h4>
                <hr/>
                <h5>Brands</h5>
                <div className='filter-wrapper'>
                    <ul>
                        <li onClick={()=>filterBrand('JBL')}><input type="checkbox"/>JBL</li>
                        <li onClick={()=>filterBrand('boAt')}><input type="checkbox"/>Boat</li>
                        <li onClick={()=>filterBrand('Sony')}><input type="checkbox"/>Sony</li>
                    </ul>
                </div>
                <h5>Category</h5>
                <div className='filter-wrapper'>
                    <ul>
                        <li onClick={()=>filterCat('Headphones')}><input type="checkbox"/>Headphones</li>
                        <li onClick={()=>filterCat('Earbuds')}><input type="checkbox"/>Earbuds</li>
                        <li onClick={()=>filterCat('Earphones')}><input type="checkbox"/>Earphones</li>
                        <li onClick={()=>filterCat('Neckbands')}><input type="checkbox"/>Neckbands</li>
                    </ul>
                </div>
            </div>
            </div>
            <div className='product-container right-side'>
            {items.length > 0 ? (
            items.map((product) => (
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

export default Shop;