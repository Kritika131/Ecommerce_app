import React from 'react'
import '../styles/products.css'
import ProductItem from './ProductItem' 
import new_collections from '../Assets/data/new_collections'
const Products = () => {
  return (
    
    <div className="product_container">
     <h1>POPULAR IN WOMEN</h1>
       
           <div className="product_items">
           {
               new_collections.map((item,i)=>(
                <ProductItem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
               ))
            }
           </div>
            
        </div>
  )
}

export default Products