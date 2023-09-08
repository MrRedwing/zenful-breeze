import { useContext } from "react";

import { UserCart } from "../data/Context";
import { CartObject } from "../Types";

import { Link } from "react-router-dom";

const Success = () => {
  const { clearCart } = useContext(UserCart) as CartObject;

  clearCart();

  return (
    <section className="min-h-screen bg-gray-100 py-4 pb-8">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="w-full md:w-2/3 lg:w-1/3 mt-10 px-4 mx-auto rounded-2xl bg-white py-2">
            <div className="my-4 flow-root">
              <h1 className="text-center text-3xl font-bold">
                Purchase Complete!
              </h1>
              <p className="mt-4">
                Thanks for buying from <strong>Zenful Breeze</strong>. We
                appreciate your support of our team and look forward to
                fulfilling all your future relaxation and humidifier needs.
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
      </div>
    </section>
  );
};

export default Success;
