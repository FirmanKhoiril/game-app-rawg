import { useState, useContext, createContext } from "react";
import { TContext } from "../types/Types";

const StateContext = createContext<TContext>({
  page: 0,
  setPage: () => {},
});

export const GlobalContext = ({ children }: { children: React.ReactNode }) => {
  const [page, setPage] = useState(0);
  return <StateContext.Provider value={{ page, setPage }}>{children}</StateContext.Provider>;
};

export const useGlobalState: any = () => useContext(StateContext);
