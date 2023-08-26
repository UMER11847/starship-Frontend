// Core
import { useContext } from "react";
// Styling
import "./scss/Product.scss";
// Contexts
import GlobalContext from "../../contexts/Global/Context";
// Assets
// import product from "../../assets/Product/earbuds.jpeg";
import Stars from "./Star";

const Product = ({ pic }) => {
  const [global, globalActions] = useContext(GlobalContext)

  return (
    <div className="product-card">
      <div className="thumbnail">
        <img onClick={() => global.navigate("/product/1")} src={pic} alt="img" />
      </div>
      <div className="prod-detail">
        <span className="name">product name </span>
        <br />
        <Stars />
        <span className="price">855$</span>
      </div>
    </div>
  );
};

export default Product;
