import "./Contact.css";
import { banner } from "../assets/assets"; // Ensure correct import path

const Contact = () => {
  return (
    <div className="Contact">
      {/* Contact Banner Section */}
      <div className="contactBanner">
        <img src={banner.ContactBanner} alt="Contact Us" />
      </div>

      {/* Contact Form Section */}
      <div className="contactDesc">
        <h1 className="MainHeading">Contact Us</h1>
        <div className="contactDesc-1">
          <form>
            <div className="form-group half">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                placeholder="Enter Your First Name"
                required
              />
            </div>
            <div className="form-group half">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                placeholder="Enter Your Last Name"
                required
              />
            </div>
            <div className="form-group half">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="form-group half">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter Your Phone Number"
                required
              />
            </div>
            <div className="form-group full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Describe Your Issue or Request"
                required
              ></textarea>
            </div>
            <div className="form-group full">
              <button className="mainButton" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
