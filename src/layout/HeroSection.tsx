import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Bg from "../assets/test.jpg";

const HeroSection = () => {
  return (
    <header className="flex items-center gap-2 min-h-[40vh] w-full px-2 lg:px-6 md:px-10  mb-9 mt-4 flex-col">
      <LazyLoadImage loading="lazy" src={Bg} alt="BackgroundSection" className="relative rounded-xl h-[50vh] w-full" />
      <div className="absolute backdrop-blur-sm hover:backdrop-blur-0 trans  h-[50vh] flex items-center justify-center flex-col gap-2 w-full">
        <h1 className="text-3xl sm:text-4xl md:text-[60px] font-inter font-extrabold leading-tight">News and Trending</h1>
        <p className="text-slate-50 tracking-wider">Based on player counts and release date &copy;</p>
      </div>
    </header>
  );
};

export default HeroSection;
