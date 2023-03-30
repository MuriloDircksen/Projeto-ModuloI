import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ModeloService } from 'src/app/service/modelo/modelo.service';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.scss']
})
export class ModeloComponent implements OnDestroy, OnInit  {

  listaModelos!: any[] ;
  subModelos!: Subscription;

  constructor(private modeloService: ModeloService, private router: Router){

  }

  ngOnInit(): void {
    this.buscaModelos();
  }

  buscaModelos(){
    this.subModelos = this.modeloService.getModelos().subscribe((data) => {
      this.listaModelos = data;
      this.listaModelos.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id ? -1 : 0)));

    })
  }
  criaModelo(){
    this.router.navigate(['/modelo/criar']);
  }

ngOnDestroy(): void {
  this.subModelos.unsubscribe;
}

}


