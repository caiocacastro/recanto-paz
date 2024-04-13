export type ProfileIds = 'admin' | 'vend' | 'cli';

export interface User {
  id: number;
  nome: string;
  email: string;
  perfil: ProfileIds;
}

export interface Profile {
  id: ProfileIds;
  nome: string;
}
