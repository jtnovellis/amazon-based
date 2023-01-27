const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (items) => {
  const total = items.reduce((a, b) => a + b.price, 0);
  return total;
};

export default async function handler(req, res) {
  const { items } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1499,
    currency: 'usd',
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}
