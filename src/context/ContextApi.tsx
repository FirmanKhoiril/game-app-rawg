import { useState, useContext, createContext } from "react";
import { TContext } from "../types/Types";

const StateContext = createContext<TContext>({
  page: 0,
  setPage: () => {},
  dark: false,
  setDark: () => {},
  searchTerm: "",
  setSearchTerm: () => {},
});

export const GlobalContext = ({ children }: { children: React.ReactNode }) => {
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [dark, setDark] = useState(false);
  return <StateContext.Provider value={{ page, searchTerm, setSearchTerm, setPage, dark, setDark }}>{children}</StateContext.Provider>;
};

export const useGlobalState: any = (): TContext => useContext(StateContext);
