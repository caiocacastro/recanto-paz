import { createContext, useContext } from 'react';
import { User } from '../interfaces/User';
import { SystemMessage } from '../interfaces/SystemMessage';

export type GlobalContent = {
  logged?: User;
  setLogged: (user?: User) => void;
  systemMessages: SystemMessage[];
  setSystemMessages: (messages: SystemMessage[]) => void;
  // TODO : Adicionar mensagens de erro em array no contexto do sistema
};

export const MyGlobalContext = createContext<GlobalContent>({
  setLogged: () => {},
  setSystemMessages: () => {},
  systemMessages: [],
});

export const useGlobalContext = () => useContext(MyGlobalContext);
