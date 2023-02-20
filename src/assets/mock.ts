import { ContractFields } from '../model/forms';
import { UserFields } from '../model/forms/user';

export const users: UserFields[] = [
  {
    nome: 'Caio Cavalcanti de Aguiar Castro',
    cep: '71687540',
    cidade: 'Brasilia',
    estado: 'DF',
    cpfcnpj: '01433540355',
    endereco: 'QC Quadra 10 Rua D Casa 12',
    nascimento: '06/10/1987',
    perfil: 'administrador',
    telefone: '61982740740',
  },
];

export const contracts: ContractFields[] = [
  { imagem: 'imagem.png', tipo: 'gaveta' },
];
