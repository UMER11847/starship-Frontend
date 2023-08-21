// Core
import { useEffect, useState } from "react";
// Styling
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { TbSearch } from "react-icons/tb";
import "./scss/Header.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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
    <header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
      <div className="header-content">
        <ul className="left">
          <li>Home</li>
          <li>About</li>
          <li>Categories</li>
        </ul>
        <div className="center">TECH STORE</div>
        <div className="right">
          <TbSearch />
          <AiOutlineHeart />
          <span className="cart-icon">
            <CgShoppingCart />
            <span>6</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
