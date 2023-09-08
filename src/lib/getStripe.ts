import { loadStripe } from "@stripe/stripe-js";

let stripePromise: any;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string
    );
  }
  return stripePromise;
};

export default getStripe;
