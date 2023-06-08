import { useParams } from "react-router-dom";

const SearchResult = () => {
  const { id } = useParams();
  return <div>SearchResult {id}</div>;
};

export default SearchResult;
