import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './layouts/content/content.component';
import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsComponent } from './components/cards/cards.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ColecaoComponent } from './components/colecao/colecao.component';
import { ModificaColecaoComponent } from './components/colecao/modifica-colecao/modifica-colecao.component';
import { ModeloComponent } from './components/modelo/modelo/modelo.component';
import { ModificaModeloComponent } from './components/modelo/modifica-modelo/modifica-modelo.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    FullComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    EsqueciSenhaComponent,
    MenuLateralComponent,
    HeaderComponent,
    CardsComponent,
    DashboardComponent,
    ColecaoComponent,
    ModificaColecaoComponent,
    ModeloComponent,
    ModificaModeloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
