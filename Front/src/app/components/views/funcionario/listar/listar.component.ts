import { Component, OnInit } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import { Funcionario } from 'src/app/models/Funcionario';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  contador: number = 0; 
  funcionarios: Funcionario[] = [];
  constructor(http: HttpClient) {
    http.get<Funcionario[]>("http://localhost:3000/funcionario/listar").subscribe((funcionarios)=>{
      console.log(funcionarios);
      this.funcionarios = funcionarios;
    });
  }


  //onInit vai dizer oq fazer quando criar o objeto
  ngOnInit(): void {


  }
  incrementar(): void {
    this.contador++;
  }

}
