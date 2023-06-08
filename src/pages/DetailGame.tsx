import { useParams } from "react-router-dom";

const DetailGame = () => {
  const { id } = useParams();
  return <div>DetailGame {id}</div>;
};

export default DetailGame;
