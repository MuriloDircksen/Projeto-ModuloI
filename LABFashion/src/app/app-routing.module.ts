import { ModeloComponent } from './components/modelo/modelo/modelo.component';
import { ModificaColecaoComponent } from './components/colecao/modifica-colecao/modifica-colecao.component';
import { ColecaoComponent } from './components/colecao/colecao.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthUsuarioGuard } from './security/auth-usuario.guard';
import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './layouts/content/content.component';
import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './pages/login/login.component';
import { ModificaModeloComponent } from './components/modelo/modifica-modelo/modifica-modelo.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children:[
      {path: '',
      redirectTo: 'login',
      pathMatch: 'full'
      },
     {
        path: 'login',
        component:LoginComponent

      },
      {
      path: 'cadastro',
      component: CadastroUsuarioComponent
      },
      {
        path: 'recuperar',
        component: EsqueciSenhaComponent
      }
    ]
  },
  {
    path: '',
    component: FullComponent,
    canActivate:[AuthUsuarioGuard],
    children: [
      {
        path: 'home',
        component: DashboardComponent
      },
      {
        path: 'colecao',
        component: ColecaoComponent,
      },
      {
        path:'colecao/:id',
        component: ModificaColecaoComponent
      },
      {
        path: 'colecao/criar',
        component: ModificaColecaoComponent
      },
      {
        path:'modelo',
        component: ModeloComponent
      }
      ,
      {
        path:'modelo/:id',
        component: ModificaModeloComponent
      },
      {
        path: 'modelo/criar',
        component: ModificaModeloComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
