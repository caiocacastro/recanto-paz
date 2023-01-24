type ContractTypes =
  | 'gaveta'
  | 'transferencia'
  | 'missa'
  | 'translado'
  | 'flores'
  | 'velorio';

export const Contratos: { [key in ContractTypes]: string } = {
  gaveta: 'Gaveta',
  flores: 'Flores',
  missa: 'Realização de Missa',
  transferencia: 'Transferencia de Gaveta',
  translado: 'Translado de Falecido',
  velorio: 'Velório',
};

export interface ContractFields {
  tipo: ContractTypes | '';
  imagem: string;
}
