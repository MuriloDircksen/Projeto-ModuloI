import { IModelo } from './../../../models/modelo';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IColecao } from 'src/app/models/colecao';
import { ColecaoService } from 'src/app/service/colecao/colecao.service';
import { ModeloService } from 'src/app/service/modelo/modelo.service';

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
  listaModelos!: any[];

  constructor(private activatedRoute: ActivatedRoute, private modeloService: ModeloService,
    private formBuilder: FormBuilder, private router: Router, private colecaoService: ColecaoService){}

  ngOnInit(): void {
    this.modeloId = this.activatedRoute.snapshot.paramMap.get('id')
    this.formModelo;
    this.buscaColecoes();
    this.buscaModelos();

  }

  verificaTemId(){

    if(this.modeloId == "criar"){
      this.titulo = "Criar Modelo"
      this.criaFormCadastro();
      return;
    }
    this.titulo = "Editar Modelo"
    this.buscaModelo();
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
      nomeModelo: new FormControl(this.modelo.nomeModelo, Validators.required),
      tipoModelo: new FormControl(this.modelo.tipo, [Validators.required]),
      nomeColecao: new FormControl(this.modelo.colecao, Validators.required),
      nomeResponsavel: new FormControl(this.modelo.responsavel, [Validators.required]),
      bordado: new FormControl(this.modelo.bordado, Validators.required),
      estampa: new FormControl(this.modelo.estampa, Validators.required),
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
    this.colecaoService.getColecoes().subscribe((data) =>{
      this.listaColecoes = data;

    })
  }
  buscaModelos(){

    this.modeloService.getModelos().subscribe((data) =>{
      this.listaModelos = data;

      this.verificaTemId();
    })
  }

  buscaModelo(){
    if(this.modeloId == "criar"){
      this.verificaTemId();
      return;
    }
    this.modeloService.getModelo(parseFloat(this.modeloId)).subscribe((data)=>{
      this.modelo = data;
      this.verificaTemId();
    })
  }

  encontraColeçãoId(){
    let colecaoId = 0;
    this.listaColecoes.map((data) =>{
      if(data.nomeColecao == this.nomeColecao){
        colecaoId = data.id;
      }
    });
    return colecaoId;
  }

   modificaModelo(){
    if(this.modeloId === "criar"){

      const modelo: any= {
        nomeModelo: this.nomeModelo,
        responsavelModelo: this.nomeResponsavel,
        tipo: this.tipoModelo,
        colecao: this.nomeColecao,
        colecaoId: this.encontraColeçãoId(),
        bordado: this.bordado,
        estampa: this.estampa
      }

      this.modeloService.criarModelo(modelo).subscribe();
      this.retornaPaginaColecao();
      return;
    }
    const modelo: any= {
      id: this.modeloId,
      nomeColecao: this.nomeColecao,
      responsavelColecao: this.nomeResponsavel,
      tipo: this.tipoModelo,
      colecao: this.nomeColecao,
      colecaoId: this.encontraColeçãoId(),
      bordado: this.bordado,
      estampa: this.estampa
    }

    this.modeloService.atualizarModelo(modelo).subscribe();
    this.retornaPaginaColecao();

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

