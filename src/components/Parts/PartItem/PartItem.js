import styles from "./PartItem.module.css";
import PartItemForm from "./PartItemForm";

const PartItem = (props) => {
  const price = `${props.price.toFixed(2)}`;

  return (
    <li className={styles.meal}>
      <div>
        <h3 className={styles.name}>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <PartItemForm />
      </div>
    </li>
  );
};

export default PartItem;
