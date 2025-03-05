import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./OrderItem.css";
import { MyContext } from "../components/context/OrderContext";
import { OrderCountContext } from "../components/context/OrderCountContext";
import { FiMinusCircle } from "react-icons/fi";

const OrderItem = () => {
  const navigate = useNavigate();
  const { items, removeItem } = useContext(MyContext);
  const { setOrderCount } = useContext(OrderCountContext);



  const [uniqueItems, setUniqueItems] = useState([]);

  // Recalculate uniqueItems whenever items change
  useEffect(() => {
    const itemMap = items.reduce((acc, item) => {
      if (acc[item.Name]) {
        acc[item.Name].quantity += item.quantity || 1;
      } else {
        acc[item.Name] = { ...item, quantity: item.quantity || 1 };
      }
      return acc;
    }, {});

    const updatedUniqueItems = Object.values(itemMap);
    setUniqueItems(updatedUniqueItems);

    setOrderCount(updatedUniqueItems.length);
    console.log("A - " + updatedUniqueItems.length);
  }, [items, setOrderCount]);


  const handleNavigation = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  // Calculate total product price
  const totalProductPrice = uniqueItems.reduce(
    (sum, item) => sum + item.Price * item.quantity,
    0
  );
  const deliveryFee = uniqueItems.length > 0 ? 200 : 0;
  const grandTotal = totalProductPrice + deliveryFee;

  return (
    <div className="OrderItem">
      <div className="order1 flex">
        <div className="order1-1 w-7/8">Order Items</div>
      </div>
      <div className="order2">
        <div className="order2-1 flex">
          <div className="order2-1-1 w-1/6">Product</div>
          <div className="order2-1-1 w-1/6">Name</div>
          <div className="order2-1-1 w-1/6">Price</div>
          <div className="order2-1-1 w-1/6">Quantity</div>
          <div className="order2-1-1 w-1/6">Total</div>
          <div className="order2-1-1 w-1/6">Action</div>
        </div>

        {uniqueItems.length > 0 ? (
          uniqueItems.map((item, index) => (
            <div key={index} className="order2-2 flex">
              <div className="order2-2-1 w-1/6">
                <img src={item.Img} alt={item.Name} />
              </div>
              <div className="order2-2-1 w-1/6 font-bold">{item.Name}</div>
              <div className="order2-2-2 w-1/6">Rs {item.Price}.00</div>
              <div className="order2-2-2 w-1/6">{item.quantity}</div>
              <div className="order2-2-2 w-1/6">Rs {item.Price * item.quantity}.00</div>
              <div className="order2-2-2 w-1/6 cursor-pointer">
                <FiMinusCircle onClick={() => removeItem(item.Name)} />
              </div>
            </div>
          ))
        ) : (
          <div className="order2-2">No items in cart</div>
        )}

        <div className="order_summary1 flex">
          <div className=" w-1/6"></div>
          <div className="summary_item1 w-1/6">Subtotal:</div>
          <div className="summary_item w-1/6"></div>
          <div className="summary_item w-1/6"></div>
          <div className="summary_item w-1/6"> Rs {totalProductPrice}.00</div>
          <div className="summary_item w-1/6"></div>
        </div>

        {uniqueItems.length > 0 && (
          <div className="order_summary flex">
            <div className="summary_item w-1/6"></div>
            <div className="summary_item1 w-1/6">Delivery Fee:</div>
            <div className="summary_item w-1/6"></div>
            <div className="summary_item w-1/6"></div>
            <div className="summary_item w-1/6">Rs {deliveryFee}.00</div>
            <div className="summary_item w-1/6"></div>
          </div>
        )}

        <div className="order_summary flex">
          <div className="summary_item w-1/6"></div>
          <div className="summary_item1 w-1/6 font-bold">Grand Total: </div>
          <div className="summary_item w-1/6"></div>
          <div className="summary_item w-1/6"></div>
          <div className="summary_item w-1/6 font-bold">Rs {grandTotal}.00</div>
          <div className="summary_item w-1/6 "></div>
        </div>

        <div className="checkout">
          <div className="mainButton" onClick={() => handleNavigation("/DeliveryFormPage")}>
            Add Delivery Address Information
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;