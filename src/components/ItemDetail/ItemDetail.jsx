import { ItemDescription } from "../ItemDescription/ItemDescription";
import { ItemImage } from "../ItemImage/ItemImage";
import classes from "./item-detail.module.css";

export const ItemDetail = (props) => {
  return (
    <div className={classes.container}>
      <section className={classes["item-section"]}>
        <ItemImage />
      </section>
      <section className={classes["item-section"]}>
        <ItemDescription />
      </section>
    </div>
  );
};
