import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.colecaoId = this.activatedRoute.snapshot.paramMap.get('id')
    this.verificaTemId();
  }

  verificaTemId(){
    console.log(this.colecaoId);

    if(this.colecaoId == "criar"){
      this.titulo = "Criar Coleção"
      return;
    }
    this.titulo = "Editar Coleção"
  }

  criaFormCadastro(){
    this.formColecao = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      empresa: new FormControl('', [Validators.required]),
      cnpj: new FormControl('', [Validators.required, Validators.minLength(14), Validators.maxLength
      (14)]),
      nome: new FormControl('', [Validators.required]),
      senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmaSenha: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  get email(){
    return this.formColecao.get('email')?.value;
  }
  get empresa(){
    return this.formColecao.get('empresa')?.value;
  }
  get cnpj(){
    return this.formColecao.get('cnpj')?.value;
  }
  get nome(){
    return this.formColecao.get('nome')?.value;
  }
  get senha(){
    return this.formColecao.get('senha')?.value;
  }
  get confirmaSenha(){
    return this.formColecao.get('confirmaSenha')?.value;
  }
}
