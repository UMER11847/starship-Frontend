// Core
import { useContext } from "react";
// Styling
import "./scss/Product.scss";
// Contexts
import GlobalContext from "../../contexts/Global/Context";
// Assets
// import product from "../../assets/Product/earbuds.jpeg";
import Stars from "./Star";

const Product = ({ item }) => {
  const [global, globalActions] = useContext(GlobalContext)

  return (
    <div className="product-card">
      <div className="thumbnail">
        <img onClick={() => global.navigate("/product/" + item._id)} src={item.images[0].url} alt={item.name} />
      </div>
      <div className="prod-detail">
        <span className="name">{item.name}</span>
        <br />
        <Stars />
        <span className="price">{item.price}$</span>
      </div>
    </div>
  );
};

export default Product;
