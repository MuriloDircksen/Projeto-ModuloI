import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IColecao } from 'src/app/models/colecao';
import { ColecaoService } from 'src/app/service/colecao/colecao.service';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.scss']
})
export class ModeloComponent {
  listaColecoes!: any[] | IColecao[];
  listaModelos: any[] = [];

  constructor(private colecaoService: ColecaoService, private router: Router){}

  ngOnInit(): void {
    this.buscaColecoes();
  }

  buscaColecoes(){
    this.colecaoService.getColecoes().subscribe((data) => {
      this.listaColecoes = data;
      this.recuperaDadosModelos();
    })
  }

  recuperaDadosModelos(){
    this.listaColecoes.map( listaColecoes => {
      let qtdModelos = Object.keys(listaColecoes.modelos).length;
      if( qtdModelos=== 0){
        return;
      }

      for(let modelo of listaColecoes.modelos){
        this.listaModelos.push(modelo);
      }

    })


  }

  criaColecao(){
    this.router.navigate(['/modelo/criar'])
  }

}


