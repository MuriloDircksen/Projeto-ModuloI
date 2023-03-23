import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './layouts/content/content.component';
import { FullComponent } from './layouts/full/full.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children:[
      {path: '',
      redirectTo: 'login',
      pathMatch: 'full'
      },
    //  {
     //   path: 'login',
    //   component:LoginComponent

     // }
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
