import { useContext } from "react";

import { UserCart } from "../data/Context";
import { CartObject } from "../Types";

import handleCheckout from "../lib/Checkout";

const Cart = () => {
  const { cart, removeFromCart, setQuantity } = useContext(
    UserCart
  ) as CartObject;
  // Finds the quanties of every item in the cart
  const quantities = cart.map((item) => item.quantity);

  // Finds the price of each item * the quantity and gets a single number
  const totalPrice = cart
    .reduce(
      (accumulator, item, index) =>
        accumulator + item.price * quantities[index],
      0
    )
    .toFixed(2);

  // Changes the quantity in the cart's state
  const updateQuantity = (index: number, by: number) => {
    if (quantities[index] + by < 1 || quantities[index] + by > 15) {
      return;
    }

    setQuantity(index, quantities[index] + by);
  };

  // Creates a listed item in the cart list on the screen
  const Items = cart.map((item, index) => {
    const { name, price, image_url, type } = item;

    return (
      <li className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
        <div className="shrink-0">
          <img
            className="h-24 w-24 max-w-full rounded-lg object-cover"
            src={image_url}
            alt={name}
          />
        </div>

        <div className="relative flex flex-1 flex-col justify-between">
          <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
            <div className="pr-8 sm:pr-5">
              <p className="text-base font-semibold text-gray-900">{name}</p>
              <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">{type}</p>
            </div>

            <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
              <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                ${price.toFixed(2)}
              </p>

              <div className="select-none sm:order-1">
                <div className="mx-auto flex h-8 items-stretch text-gray-600">
                  <button
                    className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                    onClick={() => updateQuantity(index, -1)}
                  >
                    -
                  </button>
                  <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                    {quantities[index]}
                  </div>
                  <button
                    className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                    onClick={() => updateQuantity(index, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
            <button
              type="button"
              className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
              onClick={() => removeFromCart(index)}
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                  className=""
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className="mx-auto mt-8 max-w-2xl md:mt-12">
      <div className="bg-white rounded-2xl shadow">
        <div className="px-4 py-6 sm:px-8 sm:py-10">
          <div className="flow-root">
            <ul className="-my-8">{Items}</ul>
          </div>

          <div className="mt-6 border-t border-b py-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">Subtotal</p>
              <p className="text-lg font-semibold text-gray-900">
                ${totalPrice}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-400">Shipping</p>
              <p className="text-lg font-semibold text-gray-900">$0.00</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900">Total</p>
            <p className="text-2xl font-semibold text-gray-900">
              ${totalPrice}
            </p>
          </div>

          <div className="mt-6 text-center">
            <button
              type="button"
              className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
              onClick={() => handleCheckout(cart)}
            >
              Checkout
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
        </div>
      </div>
    </div>
  );
};

export default Cart;
