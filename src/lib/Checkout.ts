import getStripe from "./getStripe";

async function handleCheckout(cart: any[]) {
  const stripe: any = await getStripe();

  const lineItems: any[] = [];

  for (const item of cart) {
    lineItems.push({ price: item.item_id, quantity: item.quantity });
  }

  console.log(lineItems);

  const { error } = await stripe.redirectToCheckout({
    lineItems: lineItems,
    mode: "payment",
    successUrl: `https://zenfulbreeze.com/success`,
    cancelUrl: `https://zenfulbreeze.com/cart`,
    shippingAddressCollection: { allowedCountries: ["US"] },
  });
  console.warn(error.message);
}

export default handleCheckout;
