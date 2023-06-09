import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getDataSearch } from "../api/fetch";
import { Error, GameCard, Loading } from "../components";
import { TResult } from "../types/Types";

const SearchResult = () => {
  const { id } = useParams();
  const { data, isFetching, isSuccess, isError, isLoading } = useQuery(["searchTerm", id], () => getDataSearch(id), {
    refetchOnWindowFocus: false,
    staleTime: 60 * (60 * 1000),
    refetchInterval: 60 * (60 * 1000),
  });

  return (
    <>
      <h1 className="text-center text-2xl sm:text-4xl py-8">Search for: {id}</h1>
      {isLoading && isFetching ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <div className="min-h-screen">
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

export default SearchResult;
