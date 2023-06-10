const HeroSection = () => {
  return (
    <header className="flex items-center gap-2 min-h-[20vh] w-full pt-5 flex-col">
      <h1 className="text-3xl sm:text-4xl md:text-[60px] font-inter font-extrabold leading-tight">News and Trending</h1>
      <p className="text-slate-50 tracking-wider">Based on player counts and release date</p>
    </header>
  );
};

export default HeroSection;
