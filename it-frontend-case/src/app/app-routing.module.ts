import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { CategoriaListaComponent } from "./categrias/components/categoria-lista/categoria-lista.component";
import { CategoriaCadastroComponent } from "./categrias/components/categoria-cadastro/categoria-cadastro.component";
import { LancamentoListaComponent } from "./lancamentos/components/lancamento-lista/lancamento-lista.component";
import { LancamentoCadastroComponent } from "./lancamentos/components/lancamento-cadastro/lancamento-cadastro.component";

const routes: Routes = [
  { path: '', redirectTo: '/categorias', pathMatch: 'full' },
  { path: 'categorias', component: CategoriaListaComponent },
  { path: 'categorias/cadastrar', component: CategoriaCadastroComponent },
  { path: 'categorias/:id/editar', component: CategoriaCadastroComponent },

  { path: 'lancamentos', component: LancamentoListaComponent },
  { path: 'lancamentos/cadastrar', component: LancamentoCadastroComponent },
  { path: 'lancamentos/:id/editar', component: LancamentoCadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
