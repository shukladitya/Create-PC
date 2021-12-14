import { useRef, useState } from "react";
import Input from "../../UI/input";
import styles from "./PartItemForm.module.css";

const PartItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const qtyRef = useRef();

  const addHandler = (e) => {
    e.preventDefault();

    const enteredAmount = qtyRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={styles.form}>
      <Input
        ref={qtyRef}
        label="Amout"
        input={{
          id: "number",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button onClick={addHandler}>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};
export default PartItemForm;
