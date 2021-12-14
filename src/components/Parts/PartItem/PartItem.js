import { useContext } from "react/cjs/react.development";
import { CartContext } from "../../../store/Cart-context";
import styles from "./PartItem.module.css";
import PartItemForm from "./PartItemForm";

const PartItem = (props) => {
  const price = `${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);

  const onAddToCart = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3 className={styles.name}>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <PartItemForm
          name={props.name}
          price={price}
          onAddToCart={onAddToCart}
        />
      </div>
    </li>
  );
};

export default PartItem;
