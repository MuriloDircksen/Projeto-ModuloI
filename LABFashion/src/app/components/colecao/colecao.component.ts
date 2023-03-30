
import { Router } from '@angular/router';
import { ColecaoService } from './../../service/colecao/colecao.service';
import { IColecao } from './../../models/colecao';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModeloService } from 'src/app/service/modelo/modelo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-colecao',
  templateUrl: './colecao.component.html',
  styleUrls: ['./colecao.component.scss']
})
export class ColecaoComponent implements OnDestroy{

  listaColecoes!: IColecao[];
  listaModelos: any[] = [];
  subColecoes!: Subscription;

  constructor(private colecaoService: ColecaoService,
    private router: Router, private modeloService: ModeloService){
    this.buscaColecoes();
  }


   buscaColecoes(){
    this.subColecoes =  this.colecaoService.getColecoes().subscribe((data) => {
      this.listaColecoes = data;
    })
    this.retornaModelos();
  }
  retornaModelos(){

    this.modeloService.getModelos().subscribe((data) =>{
      this.listaModelos=data;

    })

  }

  retornaTotalModelos(id: number){
    let numeroModelos = 0;

    this.listaModelos.map((date) =>{

      if(date.colecaoId == id){
        numeroModelos+=1;
      }
   })
   return numeroModelos;
  }


  criaColecao(){
    this.router.navigate(['/colecao/criar'])
  }

  ngOnDestroy(): void {
    this.subColecoes.unsubscribe;
  }

}
