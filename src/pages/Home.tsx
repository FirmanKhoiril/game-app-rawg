import { useInfiniteQuery } from "react-query";
import { Categories, Error, GameCard, Loading } from "../components";
import { HeroSection } from "../layout";
import { getData } from "../api/fetch";
import { TResult } from "../types/Types";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Vortex } from "react-loader-spinner";
import { useGlobalState } from "../context/ContextApi";

const Home = () => {
  const { orderBy } = useGlobalState();
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "200px",
    delay: 150,
    root: null,
  });
  const { data, isError, isLoading, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage, isSuccess } = useInfiniteQuery(["dataDetailGame", orderBy], ({ pageParam = 1 }) => getData(pageParam, orderBy), {
    refetchOnWindowFocus: false,
    staleTime: 60 * (60 * 1000),
    refetchInterval: 60 * (60 * 1000),
    getNextPageParam: (pages) => {
      const params = new URLSearchParams(pages.next);
      const pageNext = params.get("page");
      return pageNext;
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
      <HeroSection />
      <Categories />
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

export default Home;
