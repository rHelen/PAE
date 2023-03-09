import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtendimentosComponent } from './atendimentos/atendimentos.component';
import { ListaAtendimentosComponent } from './lista-atendimentos/lista-atendimentos.component';
import { CadastroAtendimentosComponent } from './cadastro-atendimentos/cadastro-atendimentos.component';
import { EditarAtendimentosComponent } from './editar-atendimentos/editar-atendimentos.component';

@NgModule({
  declarations: [
    AppComponent,
    AtendimentosComponent,
    ListaAtendimentosComponent,
    CadastroAtendimentosComponent,
    EditarAtendimentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
