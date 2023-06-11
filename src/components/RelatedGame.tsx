import { useInfiniteQuery } from "react-query";
import { IParams, TResult } from "../types/Types";
import { getRelatedGame } from "../api/fetch";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Error, GameCard, Loading } from ".";
import { Vortex } from "react-loader-spinner";

const RelatedGame = ({ title }: IParams) => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "200px",
    delay: 150,
    root: null,
  });
  const { data, isError, isLoading, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage, isSuccess } = useInfiniteQuery(["relatedGame", title], ({ pageParam = 1 }) => getRelatedGame(pageParam, title), {
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

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [isFetchingNextPage, isLoading, fetchNextPage, inView]);

  const handleNextPage = () => {
    if (inView) fetchNextPage();
  };
  return (
    <>
      {isLoading && isFetching ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <div className="flex-col flex items-center justify-center">
            <h1 className="p-4 mb-4 text-[18px] md:text-4xl font-inter">You might like this too</h1>
            <div className="flex flex-wrap justify-center items-center gap-4">{data?.pages.map((page) => page.results.map((result: TResult) => <GameCard key={result.id} item={result} />))}</div>
            {hasNextPage && (
              <button type="button" ref={ref} className={`py-2 px-2 m-auto block ${isFetchingNextPage ? "bg-transparent" : "bg-"}`} onClick={handleNextPage}>
                {isFetchingNextPage ? <Vortex visible={true} height="50" width="50" ariaLabel="vortex-loading" wrapperClass="vortex-wrapper" colors={["#22c55e", "#86efac", "#16a34a", "#84cc16", "#4ade80", "#22d3ee"]} /> : "Next"}
              </button>
            )}
          </div>
        )
      )}
    </>
  );
};

export default RelatedGame;
