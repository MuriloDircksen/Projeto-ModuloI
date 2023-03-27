import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IColecao } from 'src/app/models/colecao';
import { ColecaoService } from 'src/app/service/colecao/colecao.service';
import { ModeloService } from 'src/app/service/modelo/modelo.service';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.scss']
})
export class ModeloComponent {

  listaModelos!: any[] ;

  constructor(private modeloService: ModeloService, private router: Router){}

  ngOnInit(): void {
    this.buscaModelos();
  }

  buscaModelos(){
    this.modeloService.getModelos().subscribe((data) => {
      this.listaModelos = data;
      this.listaModelos.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id ? -1 : 0)));

    })
  }
  criaModelo(){
    this.router.navigate(['/modelo/criar'])
  }

}


