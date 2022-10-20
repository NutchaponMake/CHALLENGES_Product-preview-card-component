import classes from "./item-image.module.css";
import itemImageDesktop from "../../assets/image-product-desktop.jpg";
import itemImageMobile from "../../assets/image-product-mobile.jpg";

export const ItemImage = (props) => {
  return (
    //<div>image-product</div>
    <>
      <img
        src={itemImageDesktop}
        className={classes.desktopImage}
        alt="product image"
      />
      <img
        src={itemImageMobile}
        className={classes.mobileImage}
        alt="product image"
      />
    </>

    // <picture>
    //   <source media="(min-width:620px)" srcSet={itemImageMobile} />
    //   <img src={itemImageDesktop} alt="product image" />
    // </picture>
  );
};
