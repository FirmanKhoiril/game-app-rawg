import { useQuery } from "react-query";
import { IId, TAchievement } from "../types/Types";
import { getAchievementGame } from "../api/fetch";
import { Error, Loading } from ".";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Archievement = ({ id }: IId) => {
  const { data, isLoading, isError, isFetching, isSuccess } = useQuery(["getAchievement", id], async () => getAchievementGame(id), {
    refetchOnWindowFocus: false,
    staleTime: 60 * (60 * 1000),
    refetchInterval: 60 * (60 * 1000),
  });

  return (
    <>
      <h1 className="text-lg tracking-wider text-white/40 pt-1">Achiement Game</h1>
      {isLoading && isFetching ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <div>
            {data?.results.map((item: TAchievement) => (
              <div key={item.id} className=" min-h-[110px] gap-2 items-center flex">
                <LazyLoadImage loading="lazy" effect="blur" src={item.image} width={100} height={60} className="w-[80px] h-[80px]" alt={item.name} />
                <div className="">
                  <h1 className="font-play text-xl">{item.name}</h1>
                  <p className="text-white/70 font-poppins">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )
      )}
    </>
  );
};

export default Archievement;
