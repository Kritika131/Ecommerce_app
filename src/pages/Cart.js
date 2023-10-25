import React, { useContext } from 'react'
import "../styles/cart.css"
import remove_icon from "../Assets/images/cart_cross_icon.png"
// import all_product from '../Assets/data/all_product'
import { productContext } from '../context/ProductContext'

const Cart = () => {
  const {all_product,cartItems,removeFromCart,getTotalCartAmount} = useContext(productContext)
  return (
    <div className="cartitems">
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
       {all_product.map((item,i)=>{
         if(cartItems[item.id]>0){
            return  <div>
            <div className="cartitems-format  cartitems-format-main">
                <img src={item.image} className='cartitems-product-icon' alt="" />
                <p>{item.name}</p>
                <p>${item.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[item.id]}</button>
                <p>${item.new_price * cartItems[item.id]}</p>
                <img src={remove_icon} onClick={()=>removeFromCart(item.id)} alt="" className="cartitems-remove-icon" />
            </div>
            <hr />
        </div>
         }
         else{
          <h1>Your Cart is Empty!</h1>
         }
         return null;
       })}
       
        <div className="cartitems-total">
            <h1>Cart Total</h1>
            <div>
                <div className="cartitems-totalitem">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-totalitem">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-totalitem">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                    
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
       
       
    </div>
  )
}

export default Cart