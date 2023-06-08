import { Link } from "react-router-dom";
import { SearchBar } from "../components";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import { CiDark, CiSun } from "react-icons/ci";
import { useGlobalState } from "../context/ContextApi";

const Navbar = () => {
  const { dark, setDark } = useGlobalState();

  return (
    <nav className="py-3 bg-zinc-800 px-2 md:px-4 hidden md:flex items-center gap-4 justify-between">
      <div className="flex items-center gap-4">
        <Link to={"/"} className="font-poppins text-3xl font-bold md:tracking-wide md:text-4xl bg-gradient-to-r from-green-500 md:flex hidden via-green-300 to-green-400 bg-clip-text text-transparent">
          GREENMASTER
        </Link>
        <Link to={"/"} className="font-poppins text-3xl font-bold md:tracking-wide md:text-4xl bg-gradient-to-r from-green-500 flex md:hidden via-green-300 to-green-400 bg-clip-text text-transparent">
          GMASTER
        </Link>
      </div>
      <div className="hidden px-4 md:flex flex-grow">
        <SearchBar />
      </div>
      <div className="flex items-center flex-row-reverse gap-2">
        <button onClick={() => setDark((prev: boolean) => !prev)} type="button" name="avatar" aria-label="user" className="button_icon">
          {!dark ? <CiDark className="text-2xl" /> : <CiSun className="text-2xl" />}
        </button>
        <Link to={`/login`}>
          <button type="button" name="avatar" aria-label="user" className="button_icon">
            <RxAvatar className="text-2xl" />
          </button>
        </Link>
        <Link to={`/search`}>
          <button type="button" name="avatar" aria-label="user" className="button_icon">
            <AiOutlineSearch className="text-2xl" />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
