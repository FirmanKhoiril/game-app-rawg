import { useInfiniteQuery } from "react-query";
import { IParams, TScreenshot } from "../types/Types";
import { getScreenShot } from "../api/fetch";
import { Error, Loading } from ".";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import { Vortex } from "react-loader-spinner";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ScreenShot = ({ title }: IParams) => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "200px",
    delay: 150,
    root: null,
  });

  const { data, isLoading, isError, isFetching, isSuccess, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery(["getScreenshot", title], ({ pageParam = 1 }) => getScreenShot(pageParam, title), {
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
          <div className="">
            {data?.pages?.map((page) => (
              <SlideshowLightbox key={page.count} className="grid gap-1 grid-rows-2 grid-cols-2">
                {page?.results?.map((image: TScreenshot) => (
                  <img key={image?.id} alt={`Image ${image?.id}`} loading="lazy" width={250} height={250} className="min-w-[120px] bg-white/20 min-h-[150px] hover:scale-[1.01] rounded-lg max-w-[200px] max-h-[200px]" src={image?.image} />
                ))}
              </SlideshowLightbox>
            ))}
            {hasNextPage && (
              <button ref={ref} type="button" onClick={handleNextPage} className="py-2 px-4 bg-white/20 mt-5 rounded-sm hover:bg-white/10">
                {isFetchingNextPage ? <Vortex visible={true} height="50" width="50" ariaLabel="vortex-loading" wrapperClass="vortex-wrapper" colors={["#22c55e", "#86efac", "#16a34a", "#84cc16", "#4ade80", "#22d3ee"]} /> : "Next"}
              </button>
            )}
          </div>
        )
      )}
    </>
  );
};

export default ScreenShot;
