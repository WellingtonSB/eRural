import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produtos } from '../model/Produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoServiceService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllProduto(): Observable<Produtos[]>{
    return this.http.get<Produtos[]>('http://localhost:8080/produtos', this.token)
}

postProduto(produto: Produtos): Observable<Produtos>{
  return this.http.post<Produtos>('http://localhost:8080/produtos', produto, this.token)
}

putProduto(produto: Produtos): Observable<Produtos>{
  return this.http.put<Produtos>('http://localhost:8080/produtos', produto, this.token)
}

deleteProduto(id: number){
  return this.http.delete(`http://localhost:8080/produtos/${id}`, this.token)
}
/* VAMOS PEGAR O TEMA RESPONSAVEL PELO ID */
getByIdProduto(id: number): Observable<Produtos>{
  return this.http.get<Produtos>(`http://localhost:8080/produtos/${id}`, this.token)
}







}
