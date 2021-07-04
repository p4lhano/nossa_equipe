import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './components/views/funcionario/cadastrar/cadastrar.component';
import { ListarComponent } from './components/views/funcionario/listar/listar.component';

const routes: Routes = [
  {
    path: '',
    component: ListarComponent
  },{
    path:'funcionario/cadastradar',
    component: CadastrarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
