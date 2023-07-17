import { Categoria } from './../../../models/categoria';
import { CategoriasService } from './../../../services/categorias.service';
import { Lancamento } from './../../../models/lancamento';
import { LancamentosService } from './../../../services/lancamentos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css'],
})
export class LancamentoCadastroComponent implements OnInit, OnDestroy {
  errorMessage: string = '';
  pageTitle: string = 'Adicionar Lancamento';
  formMode: string;
  lancamento: Lancamento | null = null;
  lancamentoForm: FormGroup;
  validationMessages: { [Key: string]: { [key: string]: string } };
  subscription: Subscription | null = null;
  categoriasList: Categoria[] = []

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private lancamentosService: LancamentosService,
    private categoriasService: CategoriasService

  ) {
    this.validationMessages = {
      description: {
        required: 'Descrição é obrigatória',
        minlength: 'A descrição deve ter pelo menos 3 caracteres',
        maxlength: 'A descrição não deve exceder 50 caracteres',
      },
      date: {
        required: 'Data é obrigatória',
      },
      value: {
        required: 'Valor é obrigatório',
      },
    };

    this.formMode = '';
    this.lancamentoForm = this.fb.group({
      idCategoria: [''], // Adicione o campo idCategoria ao grupo de formulário
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      date: ['', Validators.required],
      value: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.subscription = this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id == null || id == '') {
        return

      } else {
        this.listarLancamentoPorId(id);
      }
    });

    this.listarCategorias();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  listarCategorias()
  {this.categoriasService.listarCategorias()
  .subscribe({
next: (categorias) => {this.categoriasList =categorias}
  })}

  listarLancamentoPorId(id: string): void {
    this.lancamentosService.listarLancamentoPorId(id).subscribe({
      next: (lancamento) => this.exibirLancamento(lancamento),
      error: (error: any) => (this.errorMessage = <any>error),
    });
  }

  exibirLancamento(lancamento: Lancamento): void {
    if (this.lancamentoForm) {
      this.lancamentoForm.reset();
    }
    this.lancamento = lancamento;
    if (!this.lancamento) {
      this.pageTitle = 'Adicionar lancamento';
    } else {
      this.pageTitle = `Editar lancamento: ${this.lancamento.description}`;
    }
    this.lancamentoForm.patchValue({
      idCategoria: this.lancamento.idCategoria,
      description: this.lancamento.description,
      date: this.lancamento.date,
      value: this.lancamento.value,
    });
  }

  deletarLancamento(): void {
    if (this.lancamento) {
      if (
        confirm(
          `Tem certeza que deseja excluir o lancamento: ${this.lancamento.description}?`
        )
      ) {
        this.lancamentosService.deletarLancamento(this.lancamento.id).subscribe(
          () => this.onSaveComplete(),
          (error: any) => (this.errorMessage = <any>error)
        );
      }
    }
  }

  salvar(): void {
    if (this.lancamentoForm.valid) {
      console.log(this.lancamento)

      if (this.lancamento) {
        const t: Lancamento = {
          id: this.lancamento.id,
          idCategoria: this.lancamentoForm.value.idCategoria,
          description: this.lancamentoForm.value.description,
          date: this.lancamentoForm.value.date,
          value: this.lancamentoForm.value.value,
        };
        console.log('Dados enviados para editarCategoria:', t);

        this.lancamentosService.editarLancamento(t).subscribe(
          () => this.onSaveComplete(),
          (error: any) => (this.errorMessage = <any>error)
        );
      } else {
        const novoLancamento: Lancamento = {
          id: uuidv4(),
          idCategoria: this.lancamentoForm.value.idCategoria,
          description: this.lancamentoForm.value.description,
          date: this.lancamentoForm.value.date,
          value: this.lancamentoForm.value.value,
        };
        console.log('Dados enviados para criarLancamento:', novoLancamento);
        this.lancamentosService.criarLancamento(novoLancamento).subscribe(
          () => this.onSaveComplete(),
          (error: any) => (this.errorMessage = <any>error)
        );
      }
    } else {
      this.errorMessage = 'Por favor, corrija os erros de validação.';
    }
  }

  onSaveComplete(): void {
    this.lancamentoForm.reset();
    this.router.navigate(['/lancamentos']);
  }
}
