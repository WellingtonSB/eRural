import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categorias } from '../model/Categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllCategoria(): Observable<Categorias[]>{
    return this.http.get<Categorias[]>(`${environment.server}/produtos`, this.token)
}

postCategoria(categorias: Categorias): Observable<Categorias>{
  return this.http.post<Categorias>(`${environment.server}/produtos`, categorias, this.token)
}

putCategoria(categorias: Categorias): Observable<Categorias>{
  return this.http.put<Categorias>(`${environment.server}/produtos`, categorias, this.token)
}

deleteCategoria(id: number){
  return this.http.delete(`${environment.server}/produtos/${id}`, this.token)
}
/* VAMOS PEGAR O TEMA RESPONSAVEL PELO ID */
getByIdCategoria(id: number): Observable<Categorias>{
  return this.http.get<Categorias>(`${environment.server}/produtos/${id}`, this.token)
}

}
