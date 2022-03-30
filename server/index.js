const express = require("express");
require("dotenv").config();
const stripe = require("stripe")(
  "sk_test_51KiLz6BRtCL2UFepa2cTDY8fCDwGUp5YSXfI0DRf2Cu7tIUIF1qh8EUInYr4yLFhlXODuncVh4JeHkr3t7UoVPuJ006gXXfGfX"
);
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.post("/card-payment", cors(), async (req, res) => {
  let { amount, id } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "eur",
      description: "Phanteon Genetics - Payment",
      payment_method: id,
      confirm: true,
      metadata: { integration_check: "accept_a_payment" },
    });

    // console.log("paymnet", payment);

    res.json({
      message: "Payment success",
      success: true,
    });
  } catch (error) {
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
});

app.post("/create-payment-intent", cors(), async (req, res) => {
  let { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "eur",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    // console.log("paymnet", payment);

    res.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Server stared - port 4000");
});
