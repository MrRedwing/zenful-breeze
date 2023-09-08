import data from "../data/Products.json";

import Card from "../components/Card";

const Shop = () => {
  // displays all the products in the data as cards
  const Items = data.items.map((item) => {
    return (
      <div className="my-1 w-full col-start-">
        <Card product={item} />
      </div>
    );
  });

  // home page
  return (
    <section className="min-h-screen bg-gray-100 py-4">
      <h1 className="text-center font-bold text-2xl">Zenful Breeze Store</h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto w-full md:w-2/3 lg:w-1/2 xl:w-5/12 2xl:w-1/3 gap-2 2xl:gap-1">
        {Items}
      </div>
    </section>
  );
};

export default Shop;
