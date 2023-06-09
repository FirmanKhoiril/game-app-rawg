import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import { CiDark, CiSun } from "react-icons/ci";
import { useGlobalState } from "../context/ContextApi";

const FooNav = () => {
  const { dark, setDark } = useGlobalState();
  return (
    <nav className="md:hidden flex w-full border-t border-white/10 justify-around items-center fixed z-10 bottom-0 py-2 px-1 bg-zinc-800 ">
      <Link to={`/`}>
        <button type="button" name="buttonHome" aria-label="buttonHome" className="button_icon">
          <AiOutlineHome className="text-3xl" />
        </button>
      </Link>
      <Link to={`/search`}>
        <button type="button" name="buttonSearch" aria-label="buttonSearch" className="button_icon">
          <AiOutlineSearch className="text-3xl" />
        </button>
      </Link>
      <Link to={`/login`}>
        <button type="button" name="ButtonUser" aria-label="ButtonUser" className="button_icon">
          <RxAvatar className="text-3xl" />
        </button>
      </Link>
      <button onClick={() => setDark((prev: boolean) => !prev)} name="buttonDark" type="button" aria-label="buttonDark" className="button_icon">
        {!dark ? <CiDark className="text-3xl" /> : <CiSun className="text-3xl" />}
      </button>
    </nav>
  );
};

export default FooNav;
