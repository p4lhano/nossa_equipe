import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './components/views/funcionario/listar/listar.component';
import { CadastrarComponent } from './components/views/funcionario/cadastrar/cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    CadastrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }