import { CategoriasService } from 'src/app/services/categorias.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria';
import { Subscription } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-categoria-cadastro',
  templateUrl: './categoria-cadastro.component.html',
  styleUrls: ['./categoria-cadastro.component.css'],
})
export class CategoriaCadastroComponent implements OnInit, OnDestroy {
  errorMessage: string = '';
  pageTitle: string = 'Adicionar Categoria';
  formMode: string;
  categoria: Categoria | null = null;
  categoriaForm: FormGroup;
  validationMessages: { [Key: string]: { [key: string]: string } };
  subscription: Subscription | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private categoriasService: CategoriasService
  ) {

    this.validationMessages = {
      nome: {
        required: 'Nome é obrigatório',
        minlength: 'O Nome da categoria deve ter pelo menos 3 caracteres',
        maxlength: 'O Nome da categoria não deve exceder 50 caracteres',
      },
    };

    this.formMode = '';
    this.categoriaForm = this.fb.group({
      nome: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
    });
  }

  ngOnInit() {
    this.subscription = this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id == null || id == '') {
        return;
      } else {
        this.listarCategoriaPorId(id);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  listarCategoriaPorId(id: string): void {
    this.categoriasService.listarCategoriaPorId(id)
    .subscribe({
    next:(categoria) => this.exibirCategoria(categoria),
    error: (error: any) => this.errorMessage = <any>error,
    });
  }

  exibirCategoria(categoria: Categoria): void {
    if (this.categoriaForm) {
      this.categoriaForm.reset();
    }
    this.categoria = categoria;
    if (!this.categoria) {
      this.pageTitle = 'Adicionar categoria';
    } else {
      this.pageTitle = `Editar categoria: ${this.categoria.name}`;
    }
    this.categoriaForm.patchValue({
      nome: this.categoria.name
    });
  }

  deletarCategoria(): void {
    if (this.categoria) {
      if (confirm(`Tem certeza que deseja excluir a categoria: ${this.categoria.name}?`)) {
        this.categoriasService.deletarCategoria(this.categoria.id)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
      }
    }
  }

  salvar(): void {
    if (this.categoriaForm.valid) {
      if (this.categoria) {
        const t: Categoria = {
          id: this.categoria.id,
          name: this.categoriaForm.value.nome,
        };
        console.log('Dados enviados para editarCategoria:', t);

        this.categoriasService.editarCategoria(t)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => (this.errorMessage = <any>error)
          );
      } else {
        const novaCategoria: Categoria = {
          id: uuidv4(),
          name: this.categoriaForm.value.nome,
        };
        console.log('Dados enviados para criarCategoria:', novaCategoria);
        this.categoriasService.criarCategoria(novaCategoria)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => (this.errorMessage = <any>error)
          );
      }
    } else {
      this.errorMessage = 'Por favor, corrija os erros de validação.';
    }
  }

  onSaveComplete(): void {
    this.categoriaForm.reset();
    this.router.navigate(['/categorias']);
  }
}
