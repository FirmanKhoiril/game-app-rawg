import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { IResult, TPlatform } from "../types/Types";
import { Platform } from ".";
import { Link } from "react-router-dom";

const Card = ({ item }: IResult) => {
  return (
    <Link to={`/game-detail/${item.id}`} className="w-[310px] h-[300px] overflow-hidden bg-white/5 gap-1 rounded-md flex flex-col">
      <LazyLoadImage src={item.background_image} height={170} width={310} alt="background" loading="lazy" effect="blur" className="h-[170px] w-[310px] relative" />
      <div className="absolute flex h-[170px] w-[310px] transition duration-300 flex-col hover:bg-black/80" />
      <div className="px-2 space-y-1 ">
        <div className="flex gap-2 py-px">
          {item.platforms.map((platform: TPlatform) => (
            <Platform key={platform.platform.id} platform={platform} />
          ))}
        </div>
        <h1 className="text-xl font-poppins tracking-wide">{item.name}</h1>
      </div>
    </Link>
  );
};

export default Card;
