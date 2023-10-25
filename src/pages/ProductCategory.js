import React, { useContext } from 'react'
import "../styles/productCategory.css"
import dropdown_icon from "../Assets/images/dropdown_icon.png"
import { productContext } from '../context/ProductContext'
import ProductItem from '../components/ProductItem'

const ProductCategory = (props) => {
  const {all_product} =useContext(productContext);
  // console.log(all_product);
  return (
    <div className="product-category">
      <img className='product-category-banner' src={props.banner} alt="" />
      <div className="product-category-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="product-category-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="product-category-products">
        {all_product.map((item,i)=>(
          (props.category===item.category)?(
            <ProductItem key={i} id={item.id} name={item.name}  image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          ):(
               <></>
          )
         
          
        ))}
      </div>
      <div className="product-category-loadmore">
        Explore more
      </div>
    </div>
  )
}

export default ProductCategory