import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../context/ContextApi";

const SearchBar = () => {
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm } = useGlobalState();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex grow relative">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="py-2 px-4 peer placeholder:tracking-tight tracking-wider w-full flex outline-none bg-white/10 rounded-full"
        placeholder="Search 850,052 Games"
      />
      <div className="absolute bg-black/20 peer-focus:hidden text-sm rounded-lg py-1 px-3 right-3 bottom-[5px]">
        <p>CTRL + Enter</p>
      </div>
    </form>
  );
};

export default SearchBar;
