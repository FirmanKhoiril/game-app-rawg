import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../context/ContextApi";
import { AiOutlineSearch } from "react-icons/ai";

const SearchFilter = () => {
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm } = useGlobalState();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex md:hidden py-4 grow relative">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="py-2 px-4 peer placeholder:tracking-tight mx-10 tracking-wider w-full flex outline-none bg-white/10 rounded-full"
        placeholder="       Search 850,052 Games"
      />
      <button type="submit" name="buttonSearch" className="absolute trans top-[28px] peer-focus:text-transparent left-[52px] border-r pr-1 peer-focus:border-transparent border-white/40" aria-label="searchButton">
        <AiOutlineSearch className="text-lg " />
      </button>
    </form>
  );
};

export default SearchFilter;
