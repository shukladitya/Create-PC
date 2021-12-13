import { useContext } from "react";
import { CartContext } from "../../store/Cart-context";
import CartIcon from "../Cart/CartIcon";
import Styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {

  const Cart = useContext(CartContext);

  return (
    <button className={Styles.button} onClick={props.showCart}>
      <span className={Styles.icon}>
        <CartIcon />
      </span>
      <span>Your Build</span>
      <span className={Styles.badge}>{Cart.totalItem}</span>
    </button>
  );
};

export default HeaderCartButton;
