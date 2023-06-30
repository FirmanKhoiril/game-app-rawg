import { useInfiniteQuery } from "react-query";
import { Error, GameCard, Loading, SearchFilter } from "../components";
import { getDataSearchFilter } from "../api/fetch";
import { TResult } from "../types/Types";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Vortex } from "react-loader-spinner";

const Search = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "200px",
    delay: 150,
    root: null,
  });
  const { data, isError, isLoading, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage, isSuccess } = useInfiniteQuery(["dataDetailGame"], ({ pageParam = 1 }) => getDataSearchFilter(pageParam), {
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
    <div className="min-h-screen">
      <div className=" sticky top-0 bg-zinc-900 border-t border-white/10 z-10">
        <SearchFilter />
      </div>

      {isLoading && isFetching ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <>
            <div className="flex items-center py-10 justify-center gap-3 flex-wrap">{data?.pages.map((page) => page.results.map((result: TResult) => <GameCard key={result.id} item={result} />))}</div>

            {hasNextPage && (
              <button type="button" ref={ref} className={`py-2 px-2 m-auto block ${isFetchingNextPage ? "bg-transparent" : "bg-"}`} onClick={handleNextPage}>
                {isFetchingNextPage ? <Vortex visible={true} height="50" width="50" ariaLabel="vortex-loading" wrapperClass="vortex-wrapper" colors={["#22c55e", "#86efac", "#16a34a", "#84cc16", "#4ade80", "#22d3ee"]} /> : "Next"}
              </button>
            )}
          </>
        )
      )}
    </div>
  );
};

export default Search;
