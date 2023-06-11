import { useState, useContext, createContext } from "react";
import { TContext } from "../types/Types";

const StateContext = createContext<TContext>({
  dark: false,
  setDark: () => {},
  searchTerm: "",
  orderBy: "",
  setOrderBy: () => {},
  setSearchTerm: () => {},
  setIsSignup: () => {},
  isSignup: false,
  form: {},
  setForm: () => {},
  password: false,
  setPassword: () => {},
});

const initialForm = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const GlobalContext = ({ children }: { children: React.ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [form, setForm] = useState(initialForm);
  const [isSignup, setIsSignup] = useState(false);
  const [password, setPassword] = useState(false);
  const [orderBy, setOrderBy] = useState("");
  const [dark, setDark] = useState(false);
  return <StateContext.Provider value={{ searchTerm, form, isSignup, password, setIsSignup, setPassword, setForm, orderBy, setOrderBy, setSearchTerm, dark, setDark }}>{children}</StateContext.Provider>;
};

export const useGlobalState: any = (): TContext => useContext(StateContext);
