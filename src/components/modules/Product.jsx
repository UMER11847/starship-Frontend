// Styling
import "./scss/Product.scss"
// Assets
import product from '../../assets/Product/earbuds.jpeg'

const Product = () => {
  return (
   <div className="product-card">
    <div className="thumbnail">
        <img src={product} alt="img" />
    </div>
        <div className="prod-detail">
            <span className="name">product name </span>
            <br />
            <span className="price">855$</span>
        </div>
    
   </div>
  )
}

export default Product