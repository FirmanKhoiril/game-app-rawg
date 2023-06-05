import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="py-3 bg-zinc-800 px-2 flex items-center justify-around">
      <div className="flex items-center gap-4">
        <button type="button" name="buttonMenu" aria-label="buttonMenu">
          <AiOutlineMenu className="text-2xl hover:text-white text-white/70" />
        </button>
        <Link to={"/"} className="font-poppins text-3xl md:text-4xl tracking-wider font-extrabold bg-gradient-to-r from-green-500 via-green-400 to-green-300 bg-clip-text text-transparent">
          GameMaster
        </Link>
      </div>
      <div className="">Test</div>
    </nav>
  );
};

export default Navbar;
