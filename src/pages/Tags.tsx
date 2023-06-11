import { useInfiniteQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getDataByTags } from "../api/fetch";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Error, GameCard, Loading } from "../components";
import { TResult } from "../types/Types";
import { Vortex } from "react-loader-spinner";

const Tags = () => {
  const { tag } = useParams();

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "200px",
    delay: 150,
    root: null,
  });

  const { data, hasNextPage, fetchNextPage, isLoading, isFetching, isFetchingNextPage, isError, isSuccess } = useInfiniteQuery(["byTags", tag], ({ pageParam = 1 }) => getDataByTags(pageParam, tag), {
    refetchInterval: 60 * (60 * 1000),
    staleTime: 60 * (60 * 1000),
    refetchOnWindowFocus: false,
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

export default Tags;
