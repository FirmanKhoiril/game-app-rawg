import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getDetailGame } from "../api/fetch";
import { Detail, Error, Loading } from "../components";

const DetailGame = () => {
  const { id } = useParams();

  const { data, isLoading, isError, isFetching, isSuccess } = useQuery(["detailGame", id], () => getDetailGame(id), {
    refetchOnWindowFocus: false,
    staleTime: 60 * (60 * 1000),
    refetchInterval: 60 * (60 * 1000),
  });

  return (
    <div className="min-h-screen">
      {isLoading && isFetching ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        isSuccess && (
          <>
            <Detail item={data} />
          </>
        )
      )}
    </div>
  );
};

export default DetailGame;
