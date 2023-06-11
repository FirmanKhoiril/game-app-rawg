import moment from "moment";
import { IDetailGame, TDevelopers, TGenre, TPlatform, TRatings, TTags } from "../types/Types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { Archievement, RelatedGame, ScreenShot } from ".";

const Detail = ({ item }: IDetailGame) => {
  const description = item.description
    .replace(/<p>/g, "")
    .replace(/<\/p>/g, "")
    .replace(/<br\s*\/?>/g, "")
    .replace(/<strong>(.*?)<\/strong>/g, "");

  return (
    <div className="flex flex-col py-20 md:py-10 overflow-hidden">
      <div className="flex justify-center items-center px-2 ">
        <div className="flex flex-col items-start gap-2 min-w-min md:min-w-[500px] max-w-[1000px]">
          <div className="flex flex-row gap-1 flex-wrap">
            <LazyLoadImage loading="lazy" effect="blur" src={item.background_image} alt={item.name} className="h-[370px] max-w-[480px] mb-2 rounded-tr-lg w-full" />
            <ScreenShot title={item.slug} />
          </div>
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
                <p className="text-white/30">OFFICIAL WEBSITE</p>
                <a href={item.website || item.reddit_url} rel="noopener noreferrer" className="border-b hover:text-white/70 hover:border-white/70 trans" target="_blank">
                  {item.website || item.reddit_url}
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
                  <Link to={`/developer/${developer?.slug}`} key={developer.id} className="border-transparent border-b hover:border-white trans">
                    <p>{developer.name}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-white/30 tracking-wide">GENRES</h2>
              <div className="flex gap-2">
                {item.genres.map((genre: TGenre) => (
                  <Link to={`/genre/${genre.slug}`} key={genre.name} className="border-transparent border-b hover:border-white trans tracking-wider">
                    <p>{genre.name}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-white/30 tracking-wide">PUBLISHERS</h2>
              <div className="flex gap-2 flex-wrap">
                {item.publishers.map((publish: TDevelopers) => (
                  <Link to={`/publisher/${publish.slug}`} key={publish.id} className="border-transparent tracking-wide border-b hover:border-white trans">
                    <p>{publish.name}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-white/30 tracking-wide">PLATFORMS</h2>
              <div className="flex gap-2 flex-wrap">
                {!item.platforms === null ? (
                  <div className="">
                    {item?.platforms?.map((plat: TPlatform) => (
                      <Link to={`/platform/${plat.platform.slug}`} key={plat.platform.id} className="border-transparent tracking-widest border-b hover:border-white trans">
                        <p>{plat.platform.name}</p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="">Test</div>
                )}
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
                  <Link key={tag.id} to={`/tag/${tag.slug}`} className="border-transparent border-b tracking-wide hover:border-white trans">
                    <p>{tag.name + ","}</p>
                  </Link>
                ))}
              </div>
            </div>
            <Archievement id={item.id} />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center py-10">
        <RelatedGame title={item.name} />
      </div>
    </div>
  );
};

export default Detail;
