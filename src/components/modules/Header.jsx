// Core
import { useEffect, useState } from "react";
// Styling
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { TbSearch } from "react-icons/tb";
import "./scss/Header.scss";
//Cart
import Cart from "./Cart";
//search
import Search from "./Search";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [ShowCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const ScrollHandler = () => {
    const offSet = window.scrollY;
    if (offSet > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", ScrollHandler);
  }, [scrolled]);

  return (
    <>
    <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
      <div className="header-content">
        <ul className="left">
          <li>Home</li>
          <li>About</li>
          <li>Categories</li>
        </ul>
        <div className="center">TECH STORE</div>
        <div className="right">
          <TbSearch onClick={()=> setShowSearch(true) } />
          <AiOutlineHeart />
          <span className="cart-icon" onClick={()=> setShowCart(true) }>
            <CgShoppingCart />
            <span>6</span>
          </span>
        </div>
      </div>
    </header>
    {ShowCart && <Cart setShowCart={setShowCart} />}
    {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
