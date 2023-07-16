import { CategoriasService } from './../../../services/categorias.service';
import { Categoria } from './../../../models/categoria';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.css']
})
export class CategoriaListaComponent implements OnInit{
/*  categorias: any[]; */
categorias: Categoria[] = [];
errorMessage: string = ' ';


constructor(private categoriasService: CategoriasService) {}

  ngOnInit() {
    this.listarCategorias();
  }

  listarCategorias() {
     this.categoriasService.listarCategorias().subscribe(
      categorias => {
        this.categorias = categorias;
      },
      error => this.errorMessage = <any>error
    );
    }

    deletarCategorias(id: string, name: string): void{
      if(id=== '') {
        this.onSaveComplete();

      }else{
        if(confirm(`Tem certeza que deseja excluir a categoria: ${name}?`)){
          this.categoriasService.deletarCategoria(id)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any> error
          );
        }
      }
    }

    onSaveComplete(): void {
      this.categoriasService.listarCategorias().subscribe(
        categorias => {
          this.categorias = categorias;

        },
        error => this.errorMessage = <any>error
      );
    }

}
