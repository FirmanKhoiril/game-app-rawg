import { useState, useContext, createContext } from "react";
import { TContext } from "../types/Types";

const StateContext = createContext<TContext>({
  dark: false,
  setDark: () => {},
  searchTerm: "",
  orderBy: "",
  setOrderBy: () => {},
  setSearchTerm: () => {},
});

export const GlobalContext = ({ children }: { children: React.ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [dark, setDark] = useState(false);
  return <StateContext.Provider value={{ searchTerm, orderBy, setOrderBy, setSearchTerm, dark, setDark }}>{children}</StateContext.Provider>;
};

export const useGlobalState: any = (): TContext => useContext(StateContext);
