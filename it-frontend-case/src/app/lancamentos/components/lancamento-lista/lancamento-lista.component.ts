import { LancamentosService } from './../../../services/lancamentos.service';
import { Component, OnInit } from '@angular/core';
import { Lancamento } from 'src/app/models/lancamento';

@Component({
  selector: 'app-lancamento-lista',
  templateUrl: './lancamento-lista.component.html',
  styleUrls: ['./lancamento-lista.component.css']
})
export class LancamentoListaComponent implements OnInit {
  lancamentos: Lancamento[] = [];
  msgErro: string = ' ';

  constructor(private lancamentosService: LancamentosService) {}

  ngOnInit() {
    this.listarLancamentos();
  }

  listarLancamentos() {
    this.lancamentosService.listarLancamentos().subscribe(
      lancamentos => {
        this.lancamentos = lancamentos;
      },
      error => this.msgErro = <any>error
    );
  }

  deletarLancamento(id: string, idCategoria: string, description: string, date: string, value: number): void {
    if (id === '') {
      this.onSaveComplete();
    } else {
      if (confirm(`Tem certeza que deseja excluir o lancamento: ${description}?`)) {
        this.lancamentosService.deletarLancamento(id).subscribe(
          () => this.onSaveComplete(),
          (error: any) => this.msgErro = <any>error
        );
      }
    }
  }

  onSaveComplete(): void {
    this.lancamentosService.listarLancamentos().subscribe(
      lancamentos => {
        this.lancamentos = lancamentos;
      },
      error => this.msgErro = <any>error
    );
  }
}
