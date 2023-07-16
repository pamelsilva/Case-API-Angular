import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lancamento } from '../models/lancamento';
import { Observable, throwError, of } from 'rxjs';
import { Data } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class LancamentosService {
  /*   private urlApi = 'http://localhost:3200/api/v1/lancamento'; */
  private urlApi = `${environment.baseUrl}/api/v1/lancamento`;
  private jsonHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  listarLancamentos(): Observable<Lancamento[]> {
    return this.http
      .get<[Lancamento]>(this.urlApi)
      .pipe(catchError(this.tratarErro));
  }

  listarLancamentoPorId(id: string): Observable<Lancamento> {
    if (id === '') {
      return of(this.inicializarLancamento());
    }
    const urlId = `${this.urlApi}/${id}`;
    return this.http.get<Lancamento>(urlId).pipe(catchError(this.tratarErro));
  }


  criarLancamento(lancamento: Lancamento) {
    return this.http
      .post<Lancamento>(this.urlApi, lancamento)
      .pipe(
        catchError((error: any) => {
          console.log('Erro ao criar o lançamento:', error);
          const errorMessage = error?.error?.body || 'Ocorreu um erro. Por favor, tente novamente mais tarde.';
          return throwError(errorMessage);
        })
      );
  }

  editarLancamento(lancamento: Lancamento) {
    const urlId = `${this.urlApi}/${lancamento.id}`;
    return this.http
      .patch<Lancamento>(urlId, lancamento)
      .pipe(catchError(this.tratarErro));
  }


  deletarLancamento(id: string) {
    const urlId = `${this.urlApi}/${id}`;
    return this.http
      .delete<Lancamento>(urlId, { headers: this.jsonHeaders })
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

  private inicializarLancamento(): Lancamento {
    return {
      id: 'string',
      idCategoria:'string',
      description: 'string',
      date: 'string',
      value: 0,
    };
  }
}







