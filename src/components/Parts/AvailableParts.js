import Card from "../UI/Card";
import styles from "./AvailableParts.module.css";
import PartItem from "./PartItem/PartItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableParts = () => {
  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((ele) => (
            <PartItem
              key={ele.id}
              name={ele.name}
              description={ele.description}
              price={ele.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableParts;
