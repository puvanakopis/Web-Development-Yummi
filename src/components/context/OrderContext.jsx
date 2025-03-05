import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  // Function to add a new item to the array
  const addItem = (items) => {
    setItems((prevItems) => [...prevItems, items]);
  };

  // removing  the item form item arry if click the remove button
  const removeItem = (itemName) => {
    setItems((prevItems) => prevItems.filter((item) => item.Name !== itemName));
  };


  return (
    <MyContext.Provider value={{ items, addItem, removeItem  }}>
      {children}
    </MyContext.Provider>
  );
};
