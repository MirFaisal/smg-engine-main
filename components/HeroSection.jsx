const HeroSection = () => {
  return (
    <>
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/154.jpg')] h-[500px]"></div>
          <div className="container mx-auto px-6 md:px-12 xl:px-32">
            <div className="text-center">
              <div className="mt-[-170px] block rounded-lg bg-[hsla(0,0%,100%,0.55)] bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:py-16 md:px-12">
                <h1 className="mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                  The best offer on the market <br />
                  <span className="text-danger dark:text-danger-400">
                    for your business
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
