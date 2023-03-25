import { ColecaoService } from './../../service/colecao/colecao.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

   @Input()totalColecoes: number = 0;
   @Input()totalModelos: number = 0;
   @Input()mediaOrcamentos: number = 0;


}
