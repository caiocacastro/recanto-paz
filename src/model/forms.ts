import { string } from 'yup';

export type FormType =
  | 'user'
  | 'grave'
  | 'purchase'
  | 'passing'
  | 'contract'
  | 'payment'
  | 'proposal';

export const mappedFormName: { [key in FormType]: string } = {
  user: 'Usuário',
  contract: 'Contrato',
  grave: 'Gaveta',
  passing: 'Óbito',
  payment: 'Pagamento',
  proposal: 'Proposta',
  purchase: 'Aquisição',
};

export type UserProfile = 'administrator' | 'owner' | 'employee' | 'customer';

export const Profiles: {
  [key in UserProfile]: string;
} = {
  administrator: 'Administrador',
  owner: 'Dono',
  employee: 'Empregado',
  customer: 'Adiquirente',
};
