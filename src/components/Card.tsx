import { Link } from "react-router-dom";

import { ProductItem } from "../Types";

const Card = (props: { product: ProductItem }) => {
  const { product } = props;
  const { image_url, name, price, original_price, id } = product;

  return (
    <div className="mx-auto max-w-xs overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md">
      <Link to={"/item?id=" + id + "&type=0"} className="cursor-pointer">
        <div className="px-3 pt-3 flex h-60 overflow-hidden rounded-xl">
          <img
            className="object-cover mx-auto rounded-xl"
            src={image_url}
            alt={name}
          />
        </div>
        <div className="pt-4 px-5 pb-5">
          <p className="font-bold text-xl tracking-tight text-slate-900 truncate">
            {name}
          </p>
          <div className="pt-2 pb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900">
                ${price.toFixed(2)}
              </span>
              <span className="pl-2 text-sm text-slate-900 line-through decoration-inherit">
                ${original_price.toFixed(2)}
              </span>
            </p>
          </div>
          <div className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
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
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
