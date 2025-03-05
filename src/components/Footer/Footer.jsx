import "./Footer.css"
import { useNavigate } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io";
import { RiLinkedinFill } from "react-icons/ri";
import logo from '../../assets/logo.png'

// Footer component
const Footer = () => {
  const navigate = useNavigate();

  // Function to handle navigation and scroll to the top of the page
  const handleNavigation = (path) => {
    window.scrollTo(0, 0); 
    navigate(path);
  };

  return (
    <div className='Footer flex items-center justify-center'> {/* Main footer container */}
      
      {/* First section - Logo and Social Media links */}
      <div className='f1 w-3/10 flex flex-col'>
        <div onClick={() => handleNavigation("/")} className="logo cursor-pointer h-1/2">
          <img src={logo} alt="" />
        </div>
        {/* Social Media Icons */}
        <div className="social_media flex h-1/2">
           <div className='media'><FaFacebookF /></div>
           <div className='media'><BiLogoInstagramAlt /></div>
           <div className='media'><IoLogoTwitter /></div>
           <div className='media'><RiLinkedinFill /></div>
        </div>
      </div>
      
      
      {/* Second section - Main Menu */}
      <div className='f2 w-2/10'>
        <h1>Main Menu</h1>
        <ul>
          <li onClick={() => handleNavigation("/")}>Home</li>
          <li onClick={() => handleNavigation("/menu")}>Menu</li>
          <li onClick={() => handleNavigation("/About")}>About us</li>
          <li onClick={() => handleNavigation("/Contact")}>contact us</li>
        </ul>
      </div>
      
      
      {/* Third section - Useful Links */}
      <div className='f3 w-2/10'>
        <h1>Useful links</h1>
        <ul>
          <li onClick={() => handleNavigation("/OrderItem")}>Orders</li>
          <li onClick={() => handleNavigation("/login")}>Log In</li>
        </ul>
      </div>
      
      
      {/* Fourth section - Contact Information */}
      <div className='f4 w-2/10'>
        <h1>Contact Us</h1>
        <ul>
          <li>yummi@gmail.com</li>
          <li>+9465 145 254 45</li>
          <li onClick={() => handleNavigation("/")}>www.yummi.com</li>
        </ul>
      </div>      
    </div>
  )
}

export default Footer