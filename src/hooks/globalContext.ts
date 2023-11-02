import { createContext, useContext } from "react";
import { User } from "../interfaces/User";

export type GlobalContent = {
  logged?: User;
  setLogged: (user?: User) => void;
};

export const MyGlobalContext = createContext<GlobalContent>({
  setLogged: () => {},
});

export const useGlobalContext = () => useContext(MyGlobalContext);
