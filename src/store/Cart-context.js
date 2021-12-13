import { createContext } from "react";

const CartContext = createContext();

const CartProvider = (props) => {
  const addItem = (item) => {};

  const removeItem = (item) => {};

  return (
    <CartContext.Provider
      value={{
        items: [],
        totalItem: 0,
        addItem: addItem,
        removeItem: removeItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvide;
export { CartContext };
