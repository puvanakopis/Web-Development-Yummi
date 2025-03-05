import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OrderItem from "./pages/OrderItem";
import DeliveryFormPage from "./components/DeliveryForm/DeliveryForm";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import SignUp from "./components/Login/SignUp";
import LoginPopup from "./components/Login/Login";

import {ViewProvider} from "./components/context/Context"
import {MyProvider} from "./components/context/OrderContext"
import {OrderCountProvider } from "./components/context/OrderCountContext"


 

const App = () => {
  return (
      <MyProvider>
      <OrderCountProvider>
      <ViewProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/OrderItem" element={<OrderItem />} />
        <Route path="/Login" element={<LoginPopup />} />
        <Route path="/ItemDetails" element={<ItemDetails />} />
        <Route path="/DeliveryFormPage" element={<DeliveryFormPage />} />
        <Route path="/SignUp" element={<SignUp/>} />
      </Routes>
      <Footer />     
      </ViewProvider>
      </OrderCountProvider>
      </MyProvider>
  );
};
export default App;