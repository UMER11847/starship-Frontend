import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";
import Products from "../layout/Products";
import "./scss/SingleProduct.scss";
import Star from "../modules/Star";
import { useContext, useEffect, useState } from "react";
import GlobalContext from "../../contexts/Global/Context";
import { useParams } from "react-router-dom";
import axios from "axios";
import StoreContext from "../../contexts/Store/Context";

const SingleProduct = () => {
  const [global, globalActions] = useContext(GlobalContext);
  const [store, storeActions] = useContext(StoreContext);
  const { id } = useParams();

  const [product, setProduct] = useState({ images: [{}] });
  const [amount, setAmount] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const res = await axios.get(global.api("/products/") + id);
        setProduct(res.data.product);
      } catch (err) {
        global.navigate("/404");
      }
    })();
  }, []);

  useEffect(() => {
    if (product.category)
      setRelatedProducts(
        store.products.filter((item) => (item.category === product.category && item._id !== product._id))
      );
  }, [store.products, product]);

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={product.images[0].url}
              alt={product.images[0].public_id}
            />
          </div>
          <div className="right">
            <span className="name">{product.name}</span>
            <Star />
            <span className="divider" />
            <span className="price">{product.price}$</span>
            <span className="desc">{product.description}</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={() => setAmount(amount - 1)}>-</span>
                <span>{amount}</span>
                <span onClick={() => setAmount(amount + 1)}>+</span>
              </div>
              <button className="add-to-cart-button">
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>

            <span className="divider" />

            <div className="info-item">
              <span className="text-bold">
                Category:
                <span> {product.category}</span>
              </span>

              <span className="text-bold">
                Share:
                <span className="soical-icons">
                  <FaFacebook />
                  <FaInstagram />
                  <FaLinkedinIn />
                  <FaPinterest />
                  <FaTwitter />
                </span>
              </span>
            </div>
          </div>
        </div>
        <Products products={relatedProducts} HeadingTxt="Realted Products" />
      </div>
    </div>
  );
};

export default SingleProduct;
