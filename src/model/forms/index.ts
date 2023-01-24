import { DrawerFields } from './drawer';
import { UserFields } from './user';
import { PurchaseFields } from './purchase';
import { PassingFields } from './passing';
import { ContractFields } from './contract';
import { PaymentFields } from './payment';
import { ProposalFieds } from './proposal';

export type FormType =
  // Usuarios
  | 'user'
  // Gavetas
  | 'drawer'
  // Aquisição
  | 'purchase'
  // Obitos
  | 'passing'
  // Contrato
  | 'contract'
  // Pagamento
  | 'payment'
  // Proposta
  | 'proposal';

export const mappedFormName: { [keye in FormType]: string } = {
  user: 'Usuário',
  contract: 'Contrato',
  drawer: 'Gaveta',
  passing: 'Óbito',
  payment: 'Pagamento',
  proposal: 'Proposta',
  purchase: 'Aquisição',
};

export type FormFieldsType =
  | UserFields
  | DrawerFields
  | PurchaseFields
  | PassingFields
  | ContractFields
  | PaymentFields
  | ProposalFieds;

export type FormProps<t extends FormFieldsType> = {
  handleChange: any;
  handleBlur: any;
  values: t;
  errors: any;
  touched: any;
};

export * from './user';
export * from './drawer';
export * from './purchase';
export * from './contract';
export * from './payment';
