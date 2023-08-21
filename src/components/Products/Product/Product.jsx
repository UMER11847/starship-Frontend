import React from 'react'
import product from '../../../assets/Products/earbuds.jpeg'
import "./Product.scss"
const Product = () => {
  return (
   <div className="product-card">
    <div className="thumbnail">
        <img src={product} alt="img" />
    </div>
        <div className="prod-detail">
            <span className="name">product name </span>
            <span className="price">855$</span>
        </div>
    
   </div>
  )
}

export default Product
