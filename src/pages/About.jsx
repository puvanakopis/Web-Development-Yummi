import "./About.css";
import { banner } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    window.scrollTo(0, 0); // Scroll to top
    navigate(path);
  };

  return (
    <div className="About">
      <div className="aboutBanner">
        <img src={banner.AboutBanner} alt="About Us Banner" />
      </div>
      <div className="aboutDesc">
        <h1 className="MainHeading">About Us</h1>
        <div className="aboutDesc-1">
          Founded in 2017 in Colombo, Sri Lanka, YummiFoodShop.com has quickly become a beloved platform among the Sri Lankan community. Our mission is to make it easier for customers to enjoy delicious meals and send thoughtful gifts to their loved ones. With an innovative menu system, customers can enjoy a buffet-style dining experience where each person selects one starter, main course, and dessert from a broad range of dishes offered by top restaurants across Sri Lanka.
        </div>
        <div className="aboutDesc-2">Our Location</div>

        <div className="mapContainer">
          <iframe
            title="Yummi Food Shop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.18794371846!2d79.77321653099254!3d6.927078595898109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2594c2d02f4b1%3A0xc6c4820b43f0a4e4!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1646526718327!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="mainButton" onClick={() => handleNavigation("/Menu")}>
          Explore Our Menu
        </div>

        <div className="aboutDesc-2">Yummi Food Shop – Sharing Love, One Meal at a Time.</div>
      </div>
    </div>
  );
};

export default About;
