import { Router } from '@angular/router';
import { ColecaoService } from './../../service/colecao/colecao.service';
import { IColecao } from './../../models/colecao';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colecao',
  templateUrl: './colecao.component.html',
  styleUrls: ['./colecao.component.scss']
})
export class ColecaoComponent implements OnInit{

  listaColecoes!: IColecao[];

  constructor(private colecaoService: ColecaoService, private router: Router){}

  ngOnInit(): void {
    this.buscaColecoes();
  }

  buscaColecoes(){
    this.colecaoService.getColecoes().subscribe((data) => {
      this.listaColecoes = data;
    })
  }
  numeromodelos(modelo: any){
    return modelo.length;
  }

  criaColecao(){
    this.router.navigate(['/colecao/criar'])
  }

}
