import { EsqueciSenhaComponent } from './pages/esqueci-senha/esqueci-senha.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './layouts/content/content.component';
import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './pages/login/login.component';

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
    path: 'home',
    component: FullComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
