// Core
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
// Styling
import { Link } from "@mui/material";
import { CgShoppingCart } from "react-icons/cg";
import { TbSearch } from "react-icons/tb";
import "./scss/Header.scss";
//Cart
import Cart from "./Cart";
//search
import Search from "./Search";
import AccountMenu from "./AccountMenu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [ShowCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const ScrollHandler = () => {
    const offSet = window.scrollY;
    if (offSet > 300) {
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
          <li>
            <Link to="/" component={RouterLink} underline="none" color="inherit" >
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" component={RouterLink} underline="none" color="inherit" >
              About
            </Link>
          </li>
          <li>
            <Link to="/orders" component={RouterLink} underline="none" color="inherit" >
              Orders
            </Link>
          </li>
        </ul>
        <div className="center">
          <Link to="/" component={RouterLink} underline="none" color="inherit">
            STARSHIP
          </Link>
        </div>
        <div className="right">
          <TbSearch onClick={()=> setShowSearch(true) } />
          <span className="cart-icon" onClick={()=> setShowCart(true) }>
            <CgShoppingCart />
            <span>6</span>
          </span>
          <span className="profile">
          <AccountMenu/>
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
