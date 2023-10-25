import React from 'react'
import "../styles/productItem.css"
import { Link } from 'react-router-dom'


const ProductItem = ({id,name,image,new_price,old_price}) => {
    // console.log(props);
  return (
    <div className="item">
       <Link to={`/product/${id}`}><img onClick={window.scrollTo(0,0)} src={image} alt="" /></Link> 
       <p>{name}</p>
       <div className="item-prices">
        <div className="item-price-new">
            ${new_price}
        </div>
        <div className="item-price-old">
            ${old_price}
        </div>
       </div>
    </div>
  )
}

export default ProductItem