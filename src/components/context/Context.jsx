import { createContext, useState } from "react";

// View Item
export const ViewContext = createContext();

export const ViewProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems(newItem);
  };
       

  return (
    <ViewContext.Provider value={{ items, addItem }}>
      {children}
    </ViewContext.Provider>
  );
};