export type UserProfile = 'administrator' | 'owner' | 'employee' | 'customer';

export const Profiles: {
  [key in UserProfile]: string;
} = {
  administrator: 'Administrador',
  owner: 'Dono',
  employee: 'Empregado',
  customer: 'Adiquirente',
};

export interface UserFields {
  nome: string;
  telefone: string;
  cpfcnpj: string;
  endereco: string;
  cep: string;
  cidade: string;
  estado: string;
  nascimento: string;
  perfil: string;
}
