import { IPlatform } from "../types/Types";
import { BsAndroid2, BsNintendoSwitch } from "react-icons/bs";
import { FaXbox, FaPlaystation, FaLinux } from "react-icons/fa";
import { AiFillWindows } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

const Platform = ({ platform }: IPlatform) => {
  const getPlatformIcon = () => {
    switch (platform.platform.name) {
      case "Xbox One":
      case "Xbox Series S/X":
      case "Xbox 360":
        return <FaXbox className="text-lg" />;
      case "PlayStation 5":
      case "PlayStation 3":
      case "PlayStation 4":
      case "PS Vita":
        return <FaPlaystation className="text-lg" />;
      case "PC":
        return <AiFillWindows className="text-lg" />;
      case "Linux":
        return <FaLinux className="text-lg" />;
      case "Nintendo Switch":
        return <BsNintendoSwitch className="text-lg" />;
      case "Android":
        return <BsAndroid2 />;
      case "Web":
        return <CgWebsite className="text-lg" />;
      default:
        return null;
    }
  };

  const platformIcon = getPlatformIcon();

  return <>{platformIcon}</>;
};

export default Platform;
