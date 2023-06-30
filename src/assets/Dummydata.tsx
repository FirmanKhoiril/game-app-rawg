import { SlGameController } from "react-icons/sl";
import { SiEpicgames, SiSecurityscorecard } from "react-icons/si";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";
import { MdUpdate } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FcRating } from "react-icons/fc";

export const orderDataBy = [
  {
    name: "All",
    icon: <SiEpicgames size={25} />,
    value: "",
  },
  {
    name: "Name",
    value: "name",
    icon: <SlGameController size={25} />,
  },
  {
    name: "Release date",
    value: "released",
    icon: <AiOutlineClockCircle size={25} />,
  },
  {
    name: "Date added",
    value: "added",
    icon: <BsFillCalendarDateFill size={25} />,
  },
  {
    name: "Created",
    value: "created",
    icon: <IoCreateOutline size={25} />,
  },
  {
    name: "Updated",
    value: "updated",
    icon: <MdUpdate size={25} />,
  },
  {
    name: "Popularity",
    value: "rating",
    icon: <FcRating size={25} />,
  },
  {
    name: "Meta Score",
    value: "metacritic",
    icon: <SiSecurityscorecard size={25} />,
  },
];
