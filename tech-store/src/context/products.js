// products context
import React from "react";

export const ProductContext = React.createContext();

export default function ProductProvider({ children }) {
  const greeting = "hi";
  const product = { id: 1, title: "product name" };

  return (
    <ProductContext.Provider value={{ greeting, product }}>
      {children}
    </ProductContext.Provider>
  );
}
