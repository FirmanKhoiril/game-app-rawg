const HeroSection = () => {
  return (
    <section className="flex items-center relative min-h-[20vh] w-full pt-5 flex-col">
      <h1 className="text-4xl md:text-[60px]  tracking-wide font-poppins font-extrabold leading-tight">News and Trending</h1>
      <p className="text-slate-50 tracking-wider">Based on player counts and release date</p>

      <span className="absolute w-[40vw] bottom-12 hover:bg-white trans sm:bottom-13 md:bottom-6 lg:bottom-7 h-2 rounded-full md:h-1 bg-white/10"></span>
    </section>
  );
};

export default HeroSection;
