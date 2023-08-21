// Components
import Product from "../modules/Product";
// Styling
import "./scss/Products.scss";

const Products = ({HeadingTxt}) => {
  return (
    <div className="products-container">
        <div className="sec-heading"><a id="style-2" data-replace={HeadingTxt}><span>{HeadingTxt}</span></a></div>
        <div className="products">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />

        </div>
    </div>
  )
}

export default Products
