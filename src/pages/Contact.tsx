const Contact = () => {
  return (
    <section className="flex flex-col min-h-screen bg-gray-100 py-4 pb-8">
      <div className="mx-auto w-full">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-semibold text-gray-900">Contact</h1>
        </div>

        <div className="w-full md:w-2/3 lg:w-1/3 mt-10 px-4 mx-auto rounded-2xl bg-white py-2">
          <div className="my-4 flow-root">
            <h1 className="text-3xl font-bold">
              If you're ever in need to reach our team
            </h1>
            <p className="mt-4">
              Please email:{" "}
              <strong>
                <u>ZenfulBreezeShop@gmail.com</u>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
