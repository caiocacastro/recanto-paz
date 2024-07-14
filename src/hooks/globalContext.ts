import { createContext, useContext } from 'react';
import { User } from '../interfaces/User';

export type GlobalContent = {
  logged?: User;
  setLogged: (user?: User) => void;
  // TODO : Adicionar tabela de usuários no contexto.
  // TODO : Adicionar mensagens de erro em array no contexto do sistema
};

export const MyGlobalContext = createContext<GlobalContent>({
  setLogged: () => {},
});

export const useGlobalContext = () => useContext(MyGlobalContext);
