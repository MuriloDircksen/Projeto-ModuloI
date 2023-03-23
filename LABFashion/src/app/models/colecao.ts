import { IModelo } from './modelo';
export interface IColecao{
  colecaoId: number,
  nome: string,
  responsavel: string,
  estacao: string,
  marca: string,
  orcamento: number,
  lancamento: string,
  modelos: IModelo
}
