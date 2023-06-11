import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Bg from "../assets/bg.webp";

const HeroSection = () => {
  return (
    <header className="flex items-center gap-2 min-h-[20vh] w-full mb-9 mt-2 flex-col">
      <LazyLoadImage loading="lazy" src={Bg} alt="BackgroundSection" className="relative h-[40vh] w-full" />
      <div className="absolute trans hover:backdrop-blur-sm h-[40vh] flex items-center justify-center flex-col gap-2 w-full">
        <h1 className="text-3xl sm:text-4xl md:text-[60px] font-inter font-extrabold leading-tight">News and Trending</h1>
        <p className="text-slate-50 tracking-wider">Based on player counts and release date</p>
      </div>
    </header>
  );
};

export default HeroSection;
