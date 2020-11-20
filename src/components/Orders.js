import React, { useState, useEffect } from "react";
import "./Orders.css";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import Order from "./Order.js"

const Orders = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db
        //accessing user collection
        .collection("users")
        //getting specific user logged in doc
        .doc(user?.uid)
        //accessing that user orders collection
        .collection("orders")
        //order the orders in a descendent way by created date
        .orderBy("created", "desc")
        //take all the orders docs filtered by date from the user orders collection
        //and dispatch them inside the orders state
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Vos commandes</h1>
      <div className="orders__order">
          {orders?.map(order=>(
              <Order order={order}/>
          ))}
      </div>
    </div>
  );
};

export default Orders;
