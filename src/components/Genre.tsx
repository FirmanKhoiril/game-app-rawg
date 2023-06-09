import { Link } from "react-router-dom";
import { IGenre } from "../types/Types";

const Genre = ({ genre }: IGenre) => {
  return (
    <Link to={`/genre/${genre.name}`} className="text-sm text-gray-300 hover:text-white trans">
      {genre.name}
    </Link>
  );
};

export default Genre;
