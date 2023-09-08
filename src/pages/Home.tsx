import { Link } from "react-router-dom";

const Descriptors = () => {
  const titles = [
    {
      title: "Free Shipping",
      subtitle: "On all products",
      img: "https://cdn-icons-png.flaticon.com/512/2769/2769339.png",
    },
    {
      title: "High Quality Products",
      subtitle: "Satisfaction Guaranteed",
      img: "https://cdn-icons-png.flaticon.com/512/1212/1212158.png",
    },

    {
      title: "24/7 Support",
      subtitle: "We're here to help",
      img: "https://cdn-icons-png.flaticon.com/512/5167/5167002.png",
    },
  ];
  const output = [];

  for (const title of titles) {
    output.push(
      <div className="bg-white border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5 duration-200 ease-in-out hover:scale-105 cursor-pointer">
        <img
          src={title.img}
          alt="Delivery"
          className="w-12 h-12 object-contain"
        />
        <div>
          <h4 className="font-medium capitalize text-lg">{title.title}</h4>
          <p className="text-gray-500 text-sm">{title.subtitle}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-16 mx-auto">
      <div className="w-10/12 grid grid-cols-1 xl:grid-cols-3 gap-6 mx-auto justify">
        {output}
      </div>
    </div>
  );
};

const Home = () => {
  // home page
  return (
    <section className="min-h-screen pb-10 bg-gray-100">
      <div>
        <div style={{ backgroundColor: "#ffe9ec" }}>
          <div
            className="bg-contain bg-no-repeat bg-right-bottom pt-4 pb-96 md:py-36 xl:mx-28 2xl:mx-96"
            style={{
              backgroundImage: "url('https://i.imgur.com/sFnmTYu.jpg')",
            }}
          >
            <div className="container w-11/12 mx-auto grid grid-cols-1 ml-2 md:ml-0 md:grid-cols-3">
              <div className="mx-auto col-span-2">
                <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
                  make your home <br /> your happy place
                </h1>
                <p>
                  The spa doesn't have to be your only getaway. <br />
                  Elevate any space to the power of immense relaxation.
                </p>
                <div className="mx-auto md:mx-0 w-2/3 mt-6 text-center">
                  <Link
                    className="group inline-flex w-full items-center justify-center rounded-md border-black bg-white px-6 py-4 text-lg font-semibold text-black transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-100"
                    to="/shop"
                  >
                    Begin Shopping
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
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Descriptors />
      </div>

      <div className="w-full md:w-2/3 lg:w-1/3 mt-4 px-4 mx-auto rounded-2xl bg-white py-2">
        <div className="my-4 flow-root">
          <h1 className="text-3xl font-bold">What is Zenful Breeze?</h1>
          <p className="mt-4">
            Zenful Breeze is a small team of three dedicated to delivering the
            highest quality products formulated for your relaxation. We are
            committed to creating a relaxing atmosphere in your home or office,
            as we believe it is crucial to your overall well-being. Our
            humidifiers are designed to help you achieve a comfortable and
            calming environment that promotes restful sleep, reduces stress, and
            improves your overall mood.
          </p>
          <p className="mt-4">
            At Zenful Breeze, we prioritize our customers and strive to provide
            them with the best possible experience when purchasing our products.
            We offer excellent customer service, quick and easy shipping, and a
            100% satisfaction guarantee. If you're not completely happy with
            your purchase, we will do everything in our power to make it right.{" "}
          </p>
          <p className="mt-4">
            We specialize in humidifiers, but we are constantly looking for new
            ways to help our customers create a more Zenful environment. Our
            plan is to expand our product line to include other spa products
            that promote relaxation, such as aromatherapy diffusers, essential
            oils, and candles.
          </p>
          <p className="mt-4">
            We understand that life can be hectic, and the last thing you need
            is a complicated humidifier that requires a lot of maintenance.
            That's why our products are designed to be simple and easy to use.
            All you have to do is order, open, and relax.
          </p>
          <p className="mt-4">
            By combining our commitment to quality, focus on relaxation,
            customer satisfaction, plans for expansion, and simplifying your
            life, we are confident that we can provide you with the best
            possible humidifier experience. At Zenful Breeze, our mission is to
            help you create a more Zenful environment in your home or office,
            one product at a time.
          </p>
          <p className="mt-6 text-lg font-bold">From the Zenful Breeze Team</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
