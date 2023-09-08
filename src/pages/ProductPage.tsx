import data from "../data/Products.json";

import Product from "../components/Product";
import { useSearchParams } from "react-router-dom";

const ProductPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const product = data.items[data.items.findIndex((item) => item.id === id)];

  return (
    <section className="min-h-screen bg-gray-100 py-4">
      {<Product product={product} />}
    </section>
  );
};

export default ProductPage;
