import { Button } from "../../ui/Button/Button";
import classes from "./item-description.module.css";

export const ItemDescription = (props) => {
  const addItemHandler = () => {
    alert("item is added!");
  };

  return (
    <>
      <div className={classes.description}>
        <p>PERFUME</p>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Oliver
          Polge, Perfumer-Creator for the House of CHANEL
        </p>
      </div>
      <div className={classes.price}>
        <h1>$149.99</h1>
        <p>
          <del>$169.99</del>
        </p>
      </div>
      <div>
        <Button
          className={classes.addBtn}
          text="Add to Cart"
          type="button"
          onClick={addItemHandler}
        />
      </div>
    </>
  );
};
