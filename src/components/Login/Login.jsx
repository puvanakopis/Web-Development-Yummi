import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../assets/users.js";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = getUsers(); // Get stored users

    // Check if the entered email and password match any user
    const validUser = users.find(
      (user) => user.email === formData.email && user.password === formData.password
    );

    if (validUser) {
      alert("Login successful!");
      localStorage.setItem("loggedInUser", formData.email); // Store the logged-in user in localStorage
      navigate("/"); // Redirect to dashboard or home page
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className='LoginPopup flex justify-center items-center'>
      <div className="login-container">
        <h2 className="login-title MainHeading">Log in</h2>
        <div className="login-box">
          <form onSubmit={handleSubmit}>
            <div className='email'>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter Your Email" required onChange={handleChange} />
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter Your Password" required onChange={handleChange} />
            </div>

            {/* Options (Checkbox + Forgot Password) */}
            <div className="options flex items-center justify-between">
              <label className="options1 flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>Remember&nbsp;Me</span>
              </label>
              <a href="#" className="options2 text-sm text-orange-600 font-bold">Forgot Password</a>
            </div>

            <button type="submit" className="login-btn">Log In</button>

            <p className="signup-text">
              Don&apos;t have an account?{" "}
              <a href="#" onClick={(e) => { e.preventDefault(); navigate("/SignUp"); }}>
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
