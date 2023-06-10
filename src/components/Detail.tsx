import moment from "moment";
import { IDetailGame, TDevelopers, TGenre, TPlatform, TRatings, TTags } from "../types/Types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { RelatedGame } from ".";

const Detail = ({ item }: IDetailGame) => {
  const description = item.description
    .replace(/<p>/g, "")
    .replace(/<\/p>/g, "")
    .replace(/<br\s*\/?>/g, "")
    .replace(/<strong>(.*?)<\/strong>/g, "");

  return (
    <div className="flex flex-col py-20 md:py-10">
      <div className="flex justify-around items-center gap-5 lg:flex-row flex-col px-3 md:px-10 w-full ">
        <LazyLoadImage loading="lazy" effect="blur" src={item.background_image} alt={item.name} className="h-[370px] rounded-tr-lg w-full md:w-[400px]" width={400} height={370} />
        <div className="flex flex-col items-start gap-2 min-w-min md:min-w-[500px] max-w-[1000px]">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <p className="py-1 px-3 font-poppins tracking-wide trans hover:bg-transparent hover:text-white border-transparent hover:border-white border cursor-default rounded-full bg-white text-black">
                {moment(item.released).format("LL")}
              </p>
              <p className="text-gray-300 tracking-widest">AVERAGE PLAYTIME {item.playtime} HOURS</p>
            </div>
            <div className="flex items-center flex-wrap gap-4">
              <h1 className="font-extrabold text-3xl md:text-4xl">{item.name}</h1>
              <div className="flex flex-col">
                <p className="text-white/30">WEBSITE</p>
                <a href={item.website} rel="noopener noreferrer" className="border-b hover:text-white/70 hover:border-white/70 trans" target="_blank">
                  {item.website}
                </a>
              </div>
            </div>
          </div>
          <div className=" space-y-2">
            <p className="text-gray-300">About Game</p>
            <p className="text-sm font-poppins">{description}</p>
            <div className="flex items-center py-2 flex-wrap gap-2">
              {item.ratings.map((rating: TRatings) => (
                <div key={rating.id}>
                  <p
                    className={`flex items-center py-1 px-3 border  tracking-wider hover:border-white/30 border-transparent rounded-full gap-1 text-sm ${
                      rating.title === "meh" ? "text-yellow-500" : rating.title === "recommended" ? "text-blue-400" : rating.title === "skip" ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    <span>{rating.count}</span>
                    <span className="capitalize">{rating.title === "meh" ? `${rating.title} 😑` : rating.title === "recommended" ? `${rating.title} 👍` : rating.title === "skip" ? `${rating.title} ❌` : `${rating.title} 👌`}</span>
                  </p>
                </div>
              ))}
              <span className="tracking-widest border-b border-white/40 trans hover:border-white hover:text-white text-white/40">{item.ratings_count} RATINGS</span>
            </div>
          </div>
          <div className="flex justify-between flex-col flex-wrap w-full gap-2">
            <div className="space-y-2">
              <h2 className="text-white/30 tracking-wide">DEVELOPERS</h2>
              <div className="flex gap-2">
                {item.developers.map((developer: TDevelopers) => (
                  <div className="border-transparent border-b hover:border-white trans">
                    <p>{developer.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-white/30 tracking-wide">GENRES</h2>
              <div className="flex gap-2">
                {item.genres.map((genre: TGenre) => (
                  <Link to={`/genre/${genre.name}`} className="border-transparent border-b hover:border-white trans">
                    <p>{genre.name}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-white/30 tracking-wide">PUBLISHERS</h2>
              <div className="flex gap-2 flex-wrap">
                {item.publishers.map((publish: TDevelopers) => (
                  <div className="border-transparent border-b hover:border-white trans">
                    <p>{publish.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-white/30 tracking-wide">PLATFORMS</h2>
              <div className="flex gap-2 flex-wrap">
                {item.platforms.map((platform: TPlatform) => (
                  <div className="border-transparent border-b hover:border-white trans">
                    <p>{platform.platform.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className=" flex items-center gap-2 ">
              <h2 className="text-white/30 tracking-wide">METASCORE</h2>
              <p>
                <span className="border border-green-500 text-green-500 px-2 py-1 rounded-md">{item.metacritic | 0}</span>
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-white/30 tracking-wide">TAGS</h2>
              <div className="flex gap-2 flex-wrap">
                {item.tags.map((tag: TTags) => (
                  <div className="border-transparent border-b hover:border-white trans">
                    <p>{tag.name + ","}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <RelatedGame />
      </div>
    </div>
  );
};

export default Detail;
