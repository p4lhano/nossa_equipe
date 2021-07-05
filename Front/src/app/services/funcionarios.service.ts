import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../models/Funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  baseURL = "http://localhost:3000/";

  constructor(private http: HttpClient) { 

   }

  listar(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(`${this.baseURL}funcionario/listar`);

  }

  cadastrar(funcionario : Funcionario): Observable<Funcionario>{
      return  this.http.post<Funcionario>(`${this.baseURL}cadastrar/funcionario`, funcionario);
  }



}
