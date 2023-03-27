import { ModeloService } from './../../../service/modelo/modelo.service';
import { IColecao } from './../../../models/colecao';
import { ColecaoService } from './../../../service/colecao/colecao.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifica-colecao',
  templateUrl: './modifica-colecao.component.html',
  styleUrls: ['./modifica-colecao.component.scss']
})
export class ModificaColecaoComponent implements OnInit{

  titulo!: string;
  colecaoId!: any;
  formColecao!: FormGroup
  colecao!: IColecao;
  listaModelos!: any[];

  constructor(private activatedRoute: ActivatedRoute, private colecaoService: ColecaoService,
    private formBuilder: FormBuilder, private router: Router, private modeloService: ModeloService){}

  ngOnInit(): void {
    this.colecaoId = this.activatedRoute.snapshot.paramMap.get('id')
    this.formColecao;
    this.buscaColecao();
    this.retornaModelos();

  }

  verificaTemId(){

    if(this.colecaoId == "criar"){
      this.titulo = "Criar Coleção"
      this.criaFormCadastro();
      return;
    }
    this.titulo = "Editar Coleção"

    this.criaFormEdicao();


  }

  criaFormCadastro(){
    this.formColecao = this.formBuilder.group({
      estacao: new FormControl('', Validators.required),
      responsavelColecao: new FormControl('', [Validators.required]),
      marca: new FormControl('', Validators.required),
      nomeColecao: new FormControl('', [Validators.required, Validators.maxLength(14)]),
      orcamento: new FormControl('', Validators.required),
      lancamento: new FormControl('', Validators.required),
    });
  }

  criaFormEdicao(){
    this.formColecao = this.formBuilder.group({
      estacao: new FormControl(this.colecao.estacao, Validators.required),
      responsavelColecao: new FormControl(this.colecao.responsavelColecao, Validators.required),
      marca: new FormControl(this.colecao.marca, Validators.required),
      nomeColecao: new FormControl(this.colecao.nomeColecao, [Validators.required, Validators.maxLength(14)]),
      orcamento: new FormControl(this.colecao.orcamento, Validators.required),
      lancamento: new FormControl(this.colecao.lancamento, Validators.required),
    });
  }


  get marca(){
    return this.formColecao.get('marca')?.value;
  }
  get responsavelColecao(){
    return this.formColecao.get('responsavelColecao')?.value;
  }
  get nomeColecao(){
    return this.formColecao.get('nomeColecao')?.value;
  }
  get estacao(){
    return this.formColecao.get('estacao')?.value;
  }
  get orcamento(){
    return this.formColecao.get('orcamento')?.value;
  }
  get lancamento(){
    return this.formColecao.get('lancamento')?.value;
  }

  buscaColecao(){
    if(this.colecaoId == "criar"){
      this.verificaTemId();
      return;
    }
    this.colecaoService.getColecao(parseFloat(this.colecaoId)).subscribe((data)=>{
      this.colecao = data;
      this.verificaTemId();
    })
  }
  modificaColecao(){
    if(this.colecaoId === "criar"){
      const colecao: any= {
        nomeColecao: this.nomeColecao,
        responsavelColecao: this.responsavelColecao,
        estacao: this.estacao,
        marca: this.marca,
        orcamento: parseFloat(this.orcamento),
        lancamento: this.lancamento,

      }


      this.colecaoService.criarColecao(colecao).subscribe();
      this.retornaPaginaColecao();
      return;
    }
    const colecao: any= {
      id: this.colecao.id,
      nomeColecao: this.nomeColecao,
      responsavelColecao: this.responsavelColecao,
      estacao: this.estacao,
      marca: this.marca,
      orcamento: parseFloat(this.orcamento),
      lancamento: this.lancamento,

    }

    this.colecaoService.atualizarColecao(colecao).subscribe();
    this.retornaPaginaColecao();

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

  excluiColecao(){

     if(this.retornaTotalModelos(this.colecaoId) === 0){
      this.colecaoService.excluirColecao(this.colecaoId).subscribe();
      this.retornaPaginaColecao();
      return;
    }
    alert("Impossível excluir coleções com modelos associados!")
    this.retornaPaginaColecao();
  }

  retornaPaginaColecao(){
    this.router.navigate(['/colecao']);
  }

}


