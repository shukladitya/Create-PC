import bgImg from "../../assets/background.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Create PC</h1>
        <HeaderCartButton showCart={props.showCart}/>
      </header>

      <div className={styles["main-image"]}>
        <img src={bgImg} alt="A gaming PC setup" />
      </div>
    </>
  );
};

export default Header;
