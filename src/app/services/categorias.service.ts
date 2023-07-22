import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria';
import { Observable, throwError, of } from 'rxjs';
import { Data } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  /*   private urlApi = 'http://localhost:3200/api/v1/categoria'; */
  private urlApi = `${environment.baseUrl}/api/v1/categoria`;
  private jsonHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  listarCategorias(): Observable<Categoria[]> {
    return this.http
      .get<Categoria[]>(this.urlApi)
      .pipe(catchError(this.tratarErro));
  }

  listarCategoriaPorId(id: string): Observable<Categoria> {
    if (id === '') {
      return of(this.inicializarCategoria());
    }
    const urlId = `${this.urlApi}/${id}`;
    return this.http.get<Categoria>(urlId).pipe(catchError(this.tratarErro));
  }

  criarCategoria(categoria: Categoria) {
    return this.http
      .post<Categoria>(this.urlApi, categoria)
      .pipe(
        catchError((error: any) => {
          const errorMessage = error?.error?.body || 'Ocorreu um erro. Por favor, tente novamente mais tarde.';
          return throwError(errorMessage);
        })
      );
  }


  editarCategoria(categoria: Categoria) {
    const urlId = `${this.urlApi}/${categoria.id}`;
    return this.http
      .patch<Categoria>(urlId, categoria)
      .pipe(catchError(this.tratarErro));
  }

  deletarCategoria(id: string) {
    const urlId = `${this.urlApi}/${id}`;
    return this.http
      .delete<Categoria>(urlId, { headers: this.jsonHeaders })
      .pipe(catchError(this.tratarErro));
  }

  private tratarErro(err: any) {
    let msgErro: string;

    if (err.error instanceof ErrorEvent) {
      msgErro = `Ocorreu um erro: ${err.error.message}`;
    } else {
      msgErro = `Ocorreu um erro na API.StatusCode: ${err.status}, Desc.: ${err.body.error}`;
    }

    return throwError(msgErro);
  }

  private inicializarCategoria(): Categoria {
    return {
      id: 'string',
      name: 'string',
    };
  }
}
