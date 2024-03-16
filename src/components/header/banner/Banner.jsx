import bannerImg from "./../../../assets/images/Rectangle 1.png";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-[70vh] lg:min-h-[50vh] overflow-hidden rounded-3xl">
        <img className="h-full w-full" src={bannerImg} alt="" />
        <div className="rounded-3xl"></div>
        <div className="hero-content text-center ">
          <div className="max-w-[90%] lg:max-w-[76%] mx-auto">
            <h1 className="mb-6 text-3xl lg:text-5xl font-bold text-white leading-tight lg:leading-snug">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5 lg:mb-10 text-white">
              Delve into tailored cooking classes, each uniquely crafted to
              match your tastes and preferences. Explore the culinary world with
              personalized instruction, expert guidance, and a touch of
              creativity just for you
            </p>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-7 ">
              <button className="btn bg-[#0BE58A] text-black rounded-[50px] border border-transparent text-lg font-bold px-7 py-4 h-full hover:bg-transparent hover:border-white hover:text-white">
                Explore Now
              </button>
              <button className="btn btn-outline text-white rounded-[50px] border border-white text-lg font-bold px-7 py-4 h-full hover:bg-[#0BE58A] hover:border-transparent hover:text-black">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
