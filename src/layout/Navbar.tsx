import { Link } from "react-router-dom";
import { SearchBar } from "../components";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { CiDark, CiSun } from "react-icons/ci";
import { useGlobalState } from "../context/ContextApi";

const Navbar = () => {
  const { dark, setDark } = useGlobalState();

  return (
    <>
      <nav className="md:hidden sticky top-0 bg-zinc-900 z-10 px-4 py-2 flex gap-2 items-center">
        <button type="button" name="buttonMenu" aria-label="buttonMenu">
          <AiOutlineMenu className="text-2xl hover:text-white text-white/70 trans" />
        </button>
        <Link to={"/"} className="font-poppins  text-3xl font-bold md:tracking-wide md:hidden block bg-gradient-to-r from-green-500 via-green-300 to-green-400 bg-clip-text text-transparent">
          GAMEMASTER
        </Link>
      </nav>
      <nav className="py-3 bg-zinc-800 sticky top-0 px-2 md:px-4 z-10 hidden md:flex items-center gap-4 justify-between">
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
          <button onClick={() => setDark((prev: boolean) => !prev)} type="button" name="avatar" aria-label="user" className="button_icon peer">
            {!dark ? <CiDark className="text-2xl hover:text-gray-300 trans" /> : <CiSun className="text-2xl hover:text-gray-300 trans" />}
          </button>
          <Link to={`/login`}>
            <button type="button" name="avatar" aria-label="user" className="button_icon peer">
              <RxAvatar className="text-2xl hover:text-gray-300 trans" />
            </button>
          </Link>
          <Link to={`/search`}>
            <button type="button" name="avatar" aria-label="user" className="button_icon peer">
              <AiOutlineSearch className="text-2xl hover:text-gray-300 trans" />
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
