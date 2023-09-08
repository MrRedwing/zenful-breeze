const About = () => {
  return (
    <section className="flex flex-col min-h-screen bg-gray-100 py-4 pb-8">
      <div className="mx-auto w-full">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-semibold text-gray-900">About</h1>
        </div>

        <div className="w-full md:w-2/3 lg:w-1/3 mt-10 px-4 mx-auto rounded-2xl bg-white py-2">
          <div className="my-4 flow-root">
            <h1 className="text-3xl font-bold">What is Zenful Breeze?</h1>
            <p className="mt-4">
              Zenful Breeze is a small team of three dedicated to delivering the
              highest quality products formulated for your relaxation. We are
              committed to creating a relaxing atmosphere in your home or
              office, as we believe it is crucial to your overall well-being.
              Our humidifiers are designed to help you achieve a comfortable and
              calming environment that promotes restful sleep, reduces stress,
              and improves your overall mood.
            </p>
            <p className="mt-4">
              At Zenful Breeze, we prioritize our customers and strive to
              provide them with the best possible experience when purchasing our
              products. We offer excellent customer service, quick and easy
              shipping, and a 100% satisfaction guarantee. If you're not
              completely happy with your purchase, we will do everything in our
              power to make it right.{" "}
            </p>
            <p className="mt-4">
              We specialize in humidifiers, but we are constantly looking for
              new ways to help our customers create a more Zenful environment.
              Our plan is to expand our product line to include other spa
              products that promote relaxation, such as aromatherapy diffusers,
              essential oils, and candles.
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
              possible humidifier experience. At Zenful Breeze, our mission is
              to help you create a more Zenful environment in your home or
              office, one product at a time.
            </p>
            <p className="mt-6 text-lg font-bold">
              From the Zenful Breeze Team
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
