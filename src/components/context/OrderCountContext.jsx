import { createContext, useState, useEffect } from "react";

export const OrderCountContext = createContext();

export const OrderCountProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [orderCount, setOrderCount] = useState(0);

    const updateCount = (count) => {
        setCount(count);
    };

    const updateOrderCount = (orderCount) => {
        setOrderCount(orderCount);
       
    };

    useEffect(() => {
      console.log("X - " +orderCount);
  }, [orderCount]);  // Dependency array should be [orderCount]
  


    return (
        <OrderCountContext.Provider value={{ count, setCount, orderCount, setOrderCount }}>
            {children}
        </OrderCountContext.Provider>
    );
};
