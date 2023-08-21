import productImg from "../../assets/Product/earbuds.jpeg";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus, } from "react-icons/fa";

    import RelatedProduct from "../modules/RelatedProduct";
    import "./scss/SingleProduct.scss"

    const SingleProduct = () => {
    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={productImg} alt="" />
                    </div>
                    <div className="right">
                        <span className="name">Earbuds</span>
                        <span className="price">488$</span>
                        <span className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quibusdam, reiciendis? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus ut at 
                            numquam debitis nam fugit
                             omnis ex praesentium quidem dolor! Modi consectetur corrupti tempore,
                             consequatur nulla aspernatur totam officiis ipsum!
                        </span>
                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span>-</span>
                                <span>5</span>
                                <span>+</span>
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
                                <span>Headphones</span>
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
                <RelatedProduct />
            </div>
        </div>
    );
};

export default SingleProduct;
