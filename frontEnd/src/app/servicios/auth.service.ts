import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NUsuario } from '../model/n-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = "http://localhost:8080/api/auth/";

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NUsuario):Observable<any>{
    return this.httpClient.post<any>(this.authURL + "register", nuevoUsuario);
  }

  public login(LoginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + "authenticate",LoginUsuario);
  }
}
