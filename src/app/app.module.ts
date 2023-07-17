import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriaCadastroComponent } from './categrias/components/categoria-cadastro/categoria-cadastro.component';
import { CategoriaListaComponent } from './categrias/components/categoria-lista/categoria-lista.component';
import { LancamentoCadastroComponent } from './lancamentos/components/lancamento-cadastro/lancamento-cadastro.component';
import { LancamentoListaComponent } from './lancamentos/components/lancamento-lista/lancamento-lista.component';
import { NavbarComponent} from './shared/components/navbar/navbar.component'


@NgModule({
  declarations: [
    AppComponent,
    CategoriaListaComponent,
    CategoriaCadastroComponent,
    LancamentoCadastroComponent,
    LancamentoListaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
