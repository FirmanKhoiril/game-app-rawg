import { Link } from "react-router-dom";
import { IGenre } from "../types/Types";

const Genre = ({ genre }: IGenre) => {
  return (
    <Link to={`/genre/${genre.name}`} className="text-[13px] text-gray-300 border-b hover:border-white border-transparent hover:text-white trans">
      {genre.name}
    </Link>
  );
};

export default Genre;
