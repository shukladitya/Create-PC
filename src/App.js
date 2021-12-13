import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Parts from "./components/Parts/Parts";
import CartProvider from "./store/Cart-context";

const App = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCarthandler = () => {
    setCartIsShown(true);
  };
  const hideCarthandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart hideCart={hideCarthandler} />}
      <Header showCart={showCarthandler} />
      <main>
        <Parts />
      </main>
    </CartProvider>
  );
};

export default App;
