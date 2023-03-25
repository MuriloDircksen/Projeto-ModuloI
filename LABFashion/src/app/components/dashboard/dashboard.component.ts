
import { IColecao } from './../../models/colecao';
import { ColecaoService } from './../../service/colecao/colecao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  listaColecoes!: IColecao[];
  maioresColecoes!: IColecao[];
  totalColecoes: number = 0;
  totalModelos: number = 0;
  mediaOrcamentos: number = 0;

  constructor(private colecoesService: ColecaoService){}

  ngOnInit(): void {
    this.buscaColeções();
  }

  buscaColeções(){
    this.colecoesService.getColecoes().subscribe((data) =>{
      this.listaColecoes = data;
      this.selecionaOrcamentosMaiores();
      this.totalColecoes = data.length;
      this.retornaTotalModelos();
      this.retornaMediaOrcamentos();

    })
  }

  selecionaOrcamentosMaiores(){
    const novaLista = this.listaColecoes.sort((a,b) => (a.orcamento < b.orcamento) ? 1 : ((b.orcamento < a.orcamento) ? -1 : 0));
    this.maioresColecoes = novaLista.slice(0,5);

  }

  numeromodelos(modelo: any){
    return modelo.length;
  }

  retornaTotalModelos(){

    this.listaColecoes.map((date) =>{

      this.totalModelos+= parseFloat(this.numeromodelos(date.modelos));

   })
  }

  retornaMediaOrcamentos(){
    let somaTotal = 0;
    this.listaColecoes.map((date) => {
      somaTotal += date.orcamento
    })
    this.mediaOrcamentos = parseFloat((somaTotal/this.listaColecoes.length).toFixed(2));

    console.log(this.mediaOrcamentos);

  }


}
