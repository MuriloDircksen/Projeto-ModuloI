import { IModelo } from './../../../models/modelo';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IColecao } from 'src/app/models/colecao';
import { ColecaoService } from 'src/app/service/colecao/colecao.service';

@Component({
  selector: 'app-modifica-modelo',
  templateUrl: './modifica-modelo.component.html',
  styleUrls: ['./modifica-modelo.component.scss']
})
export class ModificaModeloComponent {
  titulo!: string;
  modeloId!: any;
  formModelo!: FormGroup
  modelo!: IModelo;
  listaColecoes!: any[] | IColecao[];

  constructor(private activatedRoute: ActivatedRoute, private colecoesService: ColecaoService,
    private formBuilder: FormBuilder, private router: Router){}

  ngOnInit(): void {
    this.modeloId = this.activatedRoute.snapshot.paramMap.get('id')
    this.formModelo;
    this.buscaColecoes();

  }

  verificaTemId(){

    if(this.modeloId == "criar"){
      this.titulo = "Criar Modelo"
      this.criaFormCadastro();
      return;
    }
    this.titulo = "Editar Modelo"

    this.criaFormEdicao();


  }

  criaFormCadastro(){
    this.formModelo = this.formBuilder.group({
      nomeModelo: new FormControl('', Validators.required),
      tipoModelo: new FormControl('', [Validators.required]),
      nomeColecao: new FormControl('', Validators.required),
      nomeResponsavel: new FormControl('', [Validators.required]),
      bordado: new FormControl('', Validators.required),
      estampa: new FormControl('', Validators.required),
    });
  }

  criaFormEdicao(){
    this.formModelo = this.formBuilder.group({
      nomeModelo: new FormControl('', Validators.required),
      tipoModelo: new FormControl('', [Validators.required]),
      nomeColecao: new FormControl('', Validators.required),
      nomeResponsavel: new FormControl('', [Validators.required, Validators.maxLength(14)]),
      bordado: new FormControl('', Validators.required),
      estampa: new FormControl('', Validators.required),
    });
  }


  get nomeModelo(){
    return this.formModelo.get('nomeModelo')?.value;
  }
  get tipoModelo(){
    return this.formModelo.get('tipoModelo')?.value;
  }
  get nomeColecao(){
    return this.formModelo.get('nomeColecao')?.value;
  }
  get nomeResponsavel(){
    return this.formModelo.get('nomeResponsavel')?.value;
  }
  get bordado(){
    return this.formModelo.get('bordado')?.value;
  }
  get estampa(){
    return this.formModelo.get('estampa')?.value;
  }

  buscaColecoes(){

    this.colecoesService.getColecoes().subscribe((data) =>{
      this.listaColecoes = data;

      this.verificaTemId();
    })
  }

   modificaModelo(){
    if(this.modeloId === "criar"){


      const modelo: any= {

        nomeModelo: this.nomeModelo,
        responsavelModelo: this.nomeResponsavel,
        tipo: this.tipoModelo,
        colecao: this.nomeColecao,
        bordado: this.bordado,
        estampa: this.estampa
      }


      const atualizaColecao = this.listaColecoes.find(colecao => colecao.nomeColecao==this.nomeColecao)
      atualizaColecao.modelos.push(modelo);

      this.colecoesService.criarModelo(modelo, atualizaColecao).subscribe();
      this.router.navigate(['/modelo']);
      return;
    }
    /* const colecao: any= {
      id: this.colecao.id,
      nomeColecao: this.nomeColecao,
      responsavelColecao: this.responsavelColecao,
      estacao: this.estacao,
      marca: this.marca,
      orcamento: parseFloat(this.orcamento),
      lancamento: this.lancamento,
      modelos: this.colecao.modelos
    }

    this.colecaoService.atualizarColecao(colecao).subscribe();
    this.retornaPaginaColecao(); */

  }

 /*  excluiColecao(){

    if(Object.keys(this.colecao.modelos).length === 0){
      this.colecaoService.excluirColecao(this.colecaoId).subscribe();
      this.retornaPaginaColecao();
      return;
    }
    alert("Impossível excluir coleções com modelos associados!")
    this.retornaPaginaColecao();
  } */

  retornaPaginaColecao(){
    this.router.navigate(['/modelo']);
  }

}

