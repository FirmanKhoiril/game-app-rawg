import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import { BiLogOut, BiLogIn } from "react-icons/bi";

import Avatar from "react-avatar";

const FooNav = () => {
  const navigate = useNavigate();
  const userdata: any = localStorage.getItem("user");
  const user = JSON.parse(userdata);

  const handleLogin = () => {
    if (user) localStorage.removeItem("user");
    navigate("/login");
  };

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
      {user ? (
        <Avatar color="#16a34a" round textSizeRatio={2} size="40" src={user?.username} name={user?.username} alt={user?.username} />
      ) : (
        <Link to={`/login`}>
          <button type="button" name="ButtonUser" aria-label="ButtonUser" className="button_icon">
            <RxAvatar className="text-3xl" />
          </button>
        </Link>
      )}
      <button onClick={handleLogin} name="buttonDark" type="button" aria-label="buttonDark" className="button_icon">
        {user ? <BiLogOut className="text-3xl" /> : <BiLogIn className="text-3xl" />}
      </button>
    </nav>
  );
};

export default FooNav;
