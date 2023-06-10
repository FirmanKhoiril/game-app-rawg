import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { IResult, TPlatform } from "../types/Types";
import { BsStarFill } from "react-icons/bs";
import { Genre, Platform } from ".";
import { Link } from "react-router-dom";
import moment from "moment";

const Card = ({ item }: IResult) => {
  return (
    <div className="w-[310px] h-[320px] hover:scale-[1.02] overflow-hidden bg-white/5 gap-1 rounded-md relative flex flex-col">
      <Link to={`/games/${item.slug}`}>
        <LazyLoadImage src={item.background_image} height={170} width={310} alt="background" loading="lazy" effect="blur" className="h-[170px] w-[310px]" />
      </Link>
      <div className="px-2 space-y-1 ">
        <div className="flex gap-2 py-[3px]">
          {item.platforms.map((platform: TPlatform) => (
            <Platform key={platform.platform.id} platform={platform} />
          ))}
        </div>
        <Link to={`/games/${item.slug}`} className="text-[18px] hover:text-white/70 transition duration-300 font-poppins tracking-[0.020rem]">
          {item.name}
        </Link>
        <div className="flex gap-1 flex-wrap">
          {item.genres.map((genre) => (
            <Genre key={genre.id} genre={genre} />
          ))}
        </div>
        {item.metacritic ? <div className="absolute right-2 bottom-[100px] bg-zinc-800 border-green-500/50 border px-[6px] rounded-md">{item.metacritic}</div> : ""}
        <p className="text-[12px] text-gray-400 absolute  bottom-3">{moment(item.released).format("LL")}</p>
        <div className="absolute bottom-0 right-0 px-3 py-2">
          <p className="flex gap-1 text-white/70 hover:text-white trans text-sm items-center">
            <span>{item.rating}</span>
            <BsStarFill />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
