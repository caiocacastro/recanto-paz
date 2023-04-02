type ProposalTypes = 'boleto' | 'vista' | 'parcelado';

export const FormasPagamento: { [key in ProposalTypes]: string } = {
  boleto: 'Boleto',
  parcelado: 'Parcelamento',
  vista: 'Á Vista',
};

export interface ProposalFieds {
  descricao: string;
  forma_pagamento: ProposalTypes;
  parcelamento: number;
  valor: number;
  vendedor: string;
}
