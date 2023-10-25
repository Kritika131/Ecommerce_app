import React from 'react'
import { useParams } from 'react-router-dom'
import all_product from "../Assets/data/all_product.js"
import ProductDetails from '../components/ProductDetails.js';

const Product = () => {

    const {id} = useParams();
    const product = all_product.find((e)=>e.id===Number(id))
  return (
    
    <ProductDetails product={product}/>

  )
}

export default Product