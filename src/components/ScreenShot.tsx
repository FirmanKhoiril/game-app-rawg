import { useQuery } from "react-query";
import { IParams, TScreenshot } from "../types/Types";
import { getScreenShot } from "../api/fetch";
import { Error, Loading } from ".";
import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";

const ScreenShot = ({ title }: IParams) => {
  const { data, isLoading, isError, isFetching, isSuccess } = useQuery(["getScreenshot", title], () => getScreenShot(title), {
    refetchOnWindowFocus: false,
    staleTime: 60 * (60 * 1000),
    refetchInterval: 60 * (60 * 1000),
  });

  return (
    <>
      {isLoading && isFetching ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <SlideshowLightbox className="grid gap-1 grid-rows-2 grid-cols-2">
            {data?.results.map((image: TScreenshot) => (
              <img key={image.id} alt={`Image ${image.id}`} loading="lazy" width={250} height={250} className="min-w-[120px] bg-pink-500 min-h-[150px] max-w-[200px] max-h-[200px]" src={image.image} />
            ))}
          </SlideshowLightbox>
        )
      )}
    </>
  );
};

export default ScreenShot;
