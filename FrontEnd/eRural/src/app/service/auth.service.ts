import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  serverPort = environment.server + environment.port

  constructor(
    private Http:HttpClient
  ) { }

    entrar(userLogin:UserLogin): Observable<UserLogin>{
      return this.Http.post<UserLogin>('http://localhost:8080/usuarios/logar', userLogin)
    }

   

   







}
