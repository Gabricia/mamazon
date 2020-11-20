import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

const Order = ({ order }) => {
  return (
    <div className="order">
      <h2>Commande</h2>
      <p>{moment.unix(order.data.created).format("Do MMMM YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Total commande: {value}</h3>
        )}
        decimalScale={2}
        //divide the amount by 100 because the value is stored in cents
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"€"}
      />
    </div>
  );
};

export default Order;
