import { IModelo } from './modelo';
export interface IColecao{
  id?: number,
  nomeColecao: string,
  responsavelColecao: string,
  estacao: string,
  marca: string,
  orcamento: number,
  lancamento: string,
  modelos:IModelo

}
