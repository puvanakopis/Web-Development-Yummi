import { useNavigate, useLocation } from "react-router-dom";
import { useContext, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { OrderCountContext } from "../../components/context/OrderCountContext";
import logo from '../../assets/logo.png';
import favorite from '../../assets/icon/favorite.png';
import shop from '../../assets/icon/shop.png';
import account from '../../assets/icon/account.png';
import menu_icon from '../../assets/icon/menu.png';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { orderCount } = useContext(OrderCountContext);

  // Extract current pathname and remove the first "/"
  const currentPath = location.pathname.replace("/", "") || "Home";

  // Toggle mobile menu
  const [mobileMenu, setMobileMenu] = useState(false);

  // Use useCallback to prevent unnecessary re-renders
  const toggleMenu = useCallback(() => setMobileMenu(prev => !prev), []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "auto";
  }, [mobileMenu]);

  return (
    <div className="navbar flex items-center justify-between px-6 py-4">
      {/* Logo Section */}
      <div onClick={() => navigate("/")} className="logo cursor-pointer">
        <img src={logo} alt="logo" className="logo-img" />
      </div>

      {/* Navigation Menu */}
      <div className="menu">
        <ul className={`nav-links  ${mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}`}>
          <li><Link to="/" className={currentPath === "Home" ? "active" : ""} aria-current={currentPath === "Home" ? "page" : undefined}>Home</Link></li>
          <li><Link to="/Menu" className={currentPath === "Menu" ? "active" : ""} aria-current={currentPath === "Menu" ? "page" : undefined}>Menu</Link></li>
          <li><Link to="/About" className={currentPath === "About" ? "active" : ""} aria-current={currentPath === "About" ? "page" : undefined}>About</Link></li>
          <li><Link to="/Contact" className={currentPath === "Contact" ? "active" : ""} aria-current={currentPath === "Contact" ? "page" : undefined}>Contact</Link></li>
          <li className="mobile_view"><Link to="/OrderItem">Order Item</Link></li>
          <li className="mobile_view"><Link to="/login">Log in</Link></li>
        </ul>
      </div>

      {/* Icons for Favorite, Cart, and Login */}
      <div className="icon">
        <div className="menu-icon">
          <img src={favorite} alt="favorite" />
          <div className="dot">0</div>
        </div>
        <div className="order-icon" onClick={() => navigate("/OrderItem")}>
          <img src={shop} alt="shop" />
          <div className="dot">{orderCount}</div>
        </div>
        <div className="login-icon" onClick={() => navigate("/login")}>
          <img src={account} alt="account" />
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <img
        src={menu_icon}
        alt="menu"
        className="mobile-view-icon"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      />
    </div>
  );
};

export default Navbar;
