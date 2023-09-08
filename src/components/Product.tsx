import { useState, useEffect, useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { UserCart } from "../data/Context";
import { ProductItem, CartObject } from "../Types";

const Product = (props: { product: ProductItem }) => {
  const { name, price, original_price, text, description, options, id } =
    props.product;

  const { addToCart } = useContext(UserCart) as CartObject;

  const [searchParams] = useSearchParams();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedQuanity, setSelectedQuanity] = useState(1);
  const [selectedType, setSelectedType] = useState(
    searchParams.get("type") ? parseInt(searchParams.get("type") as string) : 0
  );

  useEffect(() => {
    window.history.replaceState(
      null,
      "React App",
      "/item?id=" + id + "&type=" + selectedType.toString()
    );

    if (window.innerWidth <= 1024) {
      window.scrollTo({ top: 100, behavior: "smooth" });
    }
  }, [selectedType]);

  const addQuantity = () => {
    if (selectedQuanity >= 15) {
      return;
    }

    setSelectedQuanity(selectedQuanity + 1);
  };

  const subtractQuantity = () => {
    if (selectedQuanity <= 1) {
      return;
    }

    setSelectedQuanity(selectedQuanity - 1);
  };

  const AdditionalImages = options[selectedType].image_urls.map(
    (item, index) => {
      return (
        <button
          type="button"
          className={
            "flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 text-center " +
            (index === selectedImage
              ? "border-black opacity-50"
              : "border-transparent")
          }
          onClick={() => setSelectedImage(index)}
        >
          <img className="h-full w-full object-contain" src={item} alt="" />
        </button>
      );
    }
  );

  const selectionTypes = options.map((item, index) => {
    return (
      <button
        onClick={() => {
          if (index === selectedType) {
            return;
          }

          setSelectedType(index);
          setSelectedImage(1);
        }}
      >
        <p
          className={
            "rounded-lg border border-black px-6 py-2 font-bold " +
            (index === selectedType ? "bg-black text-white" : "")
          }
        >
          {item.type}
        </p>
      </button>
    );
  });

  return (
    <div className="container mx-auto px-4">
      <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-3 lg:row-end-1">
          <div className="bg-white px-4 py-4  rounded-2xl lg:flex lg:items-start">
            <div className="lg:order-2 lg:ml-5">
              <div className="max-w-xl overflow-hidden rounded-lg mx-auto lg:mx-0">
                <img
                  className="aspect-square h-full w-full max-w-full object-contain"
                  src={options[selectedType].image_urls[selectedImage]}
                  alt={name}
                />
              </div>
            </div>

            <div className="flex mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0 overflow-auto">
              <div className="mx-auto lg:mx-0 flex flex-row items-start lg:flex-col">
                {AdditionalImages}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white px-4 py-2 -mt-4 lg:mt-0 mb-16 rounded-2xl lg:col-span-2 lg:row-span-2 lg:row-end-2">
          <div className="p-3 border-b-2">
            <h1 className="font-bold text-gray-900 text-3xl">{name}</h1>
            <p className="pt-4">{text}</p>
          </div>

          <div className="px-2">
            <div>
              {/* <h2 className="mt-8 text-base text-gray-900">Humidifier Type</h2> */}
              <div className="mt-8 flex select-none flex-wrap items-center gap-1">
                {selectionTypes}
              </div>
            </div>
            <div className="mt-8 grid grid-cols-10">
              <h2 className="text-base text-gray-900">Quantity</h2>
              <div className="select-none -mt-1 col-start-4 md:col-start-3 cols-span-2 w-1/4 mx-auto flex h-8 items-stretch text-gray-600">
                <button
                  className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                  onClick={subtractQuantity}
                >
                  -
                </button>
                <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                  {selectedQuanity}
                </div>
                <button
                  className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-black hover:text-white"
                  onClick={addQuantity}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 py-4 border-gray border-y-2">
            <div className="flex m-auto items-end">
              <h1 className="text-3xl font-bold">${price.toFixed(2)}</h1>
            </div>

            <div className="mx-auto xl:mx-0 mt-4 xl:mt-0">
              <Link
                className="truncate mx-auto lg:ml-4 inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 focus:text-slate-300"
                onClick={() => {
                  addToCart({
                    name: name,
                    price: price,
                    original_price: original_price,
                    image_url: options[selectedType].image_urls[1],
                    type: options[selectedType].type,
                    quantity: selectedQuanity,
                    text: text,
                    id: id,
                    url: window.location.href,
                    item_id: options[selectedType].item_id,
                  });
                }}
                to="/cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="pr-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to Cart
              </Link>
            </div>
          </div>

          <ul className="mt-8 space-y-2">
            <li className="flex items-center text-left text-sm font-medium text-gray-600">
              <svg
                className="mr-2 block h-5 w-5 align-middle text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 32 32"
                stroke="currentColor"
              >
                <path d="M 0 6 L 0 8 L 19 8 L 19 23 L 12.84375 23 C 12.398438 21.28125 10.851563 20 9 20 C 7.148438 20 5.601563 21.28125 5.15625 23 L 4 23 L 4 18 L 2 18 L 2 25 L 5.15625 25 C 5.601563 26.71875 7.148438 28 9 28 C 10.851563 28 12.398438 26.71875 12.84375 25 L 21.15625 25 C 21.601563 26.71875 23.148438 28 25 28 C 26.851563 28 28.398438 26.71875 28.84375 25 L 32 25 L 32 16.84375 L 31.9375 16.6875 L 29.9375 10.6875 L 29.71875 10 L 21 10 L 21 6 Z M 1 10 L 1 12 L 10 12 L 10 10 Z M 21 12 L 28.28125 12 L 30 17.125 L 30 23 L 28.84375 23 C 28.398438 21.28125 26.851563 20 25 20 C 23.148438 20 21.601563 21.28125 21.15625 23 L 21 23 Z M 2 14 L 2 16 L 8 16 L 8 14 Z M 9 22 C 10.117188 22 11 22.882813 11 24 C 11 25.117188 10.117188 26 9 26 C 7.882813 26 7 25.117188 7 24 C 7 22.882813 7.882813 22 9 22 Z M 25 22 C 26.117188 22 27 22.882813 27 24 C 27 25.117188 26.117188 26 25 26 C 23.882813 26 23 25.117188 23 24 C 23 22.882813 23.882813 22 25 22 Z" />
              </svg>
              Free shipping
            </li>

            <li className="flex items-center text-left text-sm font-medium text-gray-600">
              <svg
                className="mr-2 block h-5 w-5 align-middle text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  className=""
                ></path>
              </svg>
              Credit / Debit / Stripe
            </li>
          </ul>
        </div>
      </div>
      <div className="-mt-8 mb-2 mx-auto w-full lg:w-2/3 rounded-2xl bg-white px-4 py-2 lg:col-span-3">
        <div className="border-b border-gray-300">
          <nav className="flex gap-4">
            <div className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800">
              Description
            </div>
          </nav>
        </div>

        <div className="mt-8 pb-4 flow-root sm:mt-12">
          <h1 className="text-3xl font-bold">Delivered To Your Door</h1>
          <p className="mt-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
