export type BlocoOptions = 'I' | 'II' | 'III';
export const Blocos: { [key in BlocoOptions]: string } = {
  I: 'I',
  II: 'II',
  III: 'III',
};

export type LinhaOptions = 'A' | 'B' | 'C' | 'D' | 'E';
export const Linhas: { [key in LinhaOptions]: string } = {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
};

export interface DrawerFields {
  largura: string;
  profundidade: string;
  altura: string;
  bloco: BlocoOptions | '';
  linha: LinhaOptions | '';
  coluna: string;
}
