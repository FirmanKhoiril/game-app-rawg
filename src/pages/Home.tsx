import { useQuery } from "react-query";
import { Categories, Error, GameCard, Loading } from "../components";
import { HeroSection } from "../layout";
import { getData } from "../api/fetch";
import { TResult } from "../types/Types";

const Home = () => {
  const { data, isError, isLoading, isFetching, isSuccess } = useQuery(["dataDetailGame"], () => getData(), {
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
          <div className="min-h-screen">
            <HeroSection />
            <Categories />
            <div className="flex items-center justify-center py-3 gap-4 flex-wrap">
              {data?.results?.map((result: TResult, idx: number) => (
                <GameCard key={idx} item={result} />
              ))}
            </div>
          </div>
        )
      )}
    </>
  );
};

export default Home;
