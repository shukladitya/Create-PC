import Input from "../../UI/input";
import styles from "./PartItemForm.module.css";

const PartItemForm = (props) => {
  return (
    <form className={styles.form}>
      <Input
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
      <button>+ Add</button>
    </form>
  );
};
export default PartItemForm;
