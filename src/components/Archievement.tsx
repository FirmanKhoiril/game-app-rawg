import { useInfiniteQuery } from "react-query";
import { IId, TAchievement } from "../types/Types";
import { getAchievementGame } from "../api/fetch";
import { Error, Loading } from ".";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Vortex } from "react-loader-spinner";

const Archievement = ({ id }: IId) => {
  const { data, isLoading, isError, isFetching, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(["getAchievement", id], ({ pageParam = 1 }) => getAchievementGame(pageParam, id), {
    refetchOnWindowFocus: false,
    staleTime: 60 * (60 * 1000),
    refetchInterval: 60 * (60 * 1000),
    getNextPageParam: (pages) => {
      if (pages.next === null) return;
      const params = new URLSearchParams(pages.next);
      const page = params.get("page");
      return page;
    },
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
          <>
            {data?.pages?.map((page) =>
              page?.results?.map((item: TAchievement) => (
                <div key={item.id} className=" min-h-[110px] gap-2 items-center flex">
                  <LazyLoadImage loading="lazy" effect="blur" src={item.image} width={100} height={60} className="w-[80px] h-[80px]" alt={item.name} />
                  <div className="">
                    <h1 className="font-play text-xl">{item.name}</h1>
                    <p className="text-white/70 font-poppins">{item.description}</p>
                  </div>
                </div>
              ))
            )}
            {isFetchingNextPage && <Vortex visible={true} height="50" width="50" ariaLabel="vortex-loading" wrapperClass="vortex-wrapper" colors={["#22c55e", "#86efac", "#16a34a", "#84cc16", "#4ade80", "#22d3ee"]} />}
            {hasNextPage && (
              <button type="button" onClick={() => fetchNextPage()} className="py-2 px-4 bg-white/20 mt-5 rounded-sm hover:bg-white/10">
                Show More Achievement
              </button>
            )}
          </>
        )
      )}
    </>
  );
};

export default Archievement;
