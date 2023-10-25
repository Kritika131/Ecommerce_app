import React, { useContext } from 'react'
import '../styles/productDetails.css'
import star_dull_icon from "../Assets/images/star_dull_icon.png"
import star_icon from "../Assets/images/star_icon.png"
import { productContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const {all_product,addToCart} = useContext(productContext); 
  const {id}  = useParams();
  const product = all_product.find((e)=>e.id===Number(id)); 
  return (
    <div>

 

    <div className='productdisplay'>
    <div className="productdisplay-left">
       
        <div className="productdisplay-img">
            <img src={product.image } className='productdisplay-main-img' alt="" />
        </div>
    </div>
    <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${product.old_price}</div>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
            
        </div>
        <div className="productdisplay-right-description">
            A lightweight, usually knitted, pullover shirt, close-fitting and a round neckline and short sleeves, worn as an undershirt or outer garment. Lorem ipsum dolor sit amet.
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXl</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        
        <p className="productdisplay-right-category"><span>Category :</span>Women, T-Shirt, Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest,</p>

    </div>
</div>
    </div>
  )
}

export default ProductDetails