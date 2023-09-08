import { useContext } from "react";
import { UserCart } from "../data/Context";
import { CartObject } from "../Types";

import { Link } from "react-router-dom";

import Cart from "../components/Cart";

const ViewCart = () => {
  const { cart } = useContext(UserCart) as CartObject;

  // displays the cart
  return (
    <section className="min-h-screen bg-gray-100 py-4 pb-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {cart.length === 0 ? (
          <div>
            <div className="w-full md:w-2/3 lg:w-1/3 mt-10 px-4 mx-auto rounded-2xl bg-white py-2">
              <div className="my-4 flow-root">
                <h1 className="text-center text-3xl font-bold">
                  Add Items to Cart
                </h1>
                <p className="mt-4">
                  We're sorry, it looks like your cart is empty. Please add
                  items to your cart to continue with the checkout process.
                  Don't miss out on our high-quality humidifiers and other
                  relaxation products that are perfect for creating a zenful
                  environment in your home or office.
                </p>
                <Link to={"/shop"} className="cursor-pointer">
                  <div className="mt-6 text-center">
                    <button
                      type="button"
                      className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                    >
                      Continue Shopping
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-center">
              <h1 className="text-2xl font-semibold text-gray-900">
                Your Cart
              </h1>
            </div>
            <Cart />
          </div>
        )}
      </div>
    </section>
  );
};

export default ViewCart;
