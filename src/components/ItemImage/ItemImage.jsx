import classes from "./item-image.module.css";

export const ItemImage = (props) => {
  return (
    //<div>image-product</div>
    <picture>
      <source media="(min-width:700px)" srcset="image-product-desktop.jpg" />
      <img src="image-product-mobile.jpg" alt="product image" />
    </picture>
  );
};
