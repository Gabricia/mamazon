import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider";

const CheckoutProduct = ({ title, id, image, rating, price, hideButton }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item based on id from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <strong>{price}</strong>
          <small> €</small>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        {!hideButton && <button onClick={removeFromBasket}>Supprimer</button>}
      </div>
    </div>
  );
};

export default CheckoutProduct;
