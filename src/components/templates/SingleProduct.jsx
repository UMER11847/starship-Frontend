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
import CartContext from "../../contexts/Cart/Context";
import Carousel from "../modules/Carousel";
import { Box } from "@mui/material";

const SingleProduct = () => {
  const [global, globalActions] = useContext(GlobalContext);
  const [store, storeActions] = useContext(StoreContext);
  const [cart, cartActions] = useContext(CartContext);
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
        store.products.filter(
          (item) =>
            item.category === product.category && item._id !== product._id
        )
      );
  }, [store.products, product]);

  useEffect(() => {
    if (amount < 1) setAmount(1);
  }, [amount]);

  function addHandler() {
    cartActions.add({ id: product._id, item: { ...product, amount } });
  }

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            {product.name && <Carousel images={product.images} />}
          </div>
          <div className="right">
            <span className="name">{product.name}</span>
            <Star />
            <span className="divider" />
            <span className="price">{product.price}$</span>
            <span className="desc">{product.description}</span>
            <Box className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={() => setAmount(amount - 1)}>-</span>
                <span>{amount}</span>
                <span onClick={() => (amount < product.stock) && setAmount(amount + 1)}>+</span>
              </div>
              <button disabled={product.stock < 1} onClick={addHandler} className="add-to-cart-button">
                <FaCartPlus size={20} />
                {product.stock > 0 ? "ADD TO CART" : "OUT OF STOCK"}
              </button>
            </Box>

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
