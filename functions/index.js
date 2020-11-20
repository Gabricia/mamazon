const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  //secret key of stripe API, remember to hide it
  "sk_test_51HotXHDxipgOn0RlmvYj2MLZQQpZPnLHrctYL9DlT9aQ5pmJYVs8T1SQcqH44V6izz0M0CEPHq4dn6MWI8AaLGbE00SEgWeOVg"
);

//App config
const app = express();

//middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment received", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen command
exports.api = functions.https.onRequest(app);
