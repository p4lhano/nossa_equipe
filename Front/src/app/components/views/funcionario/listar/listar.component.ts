import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { funcionario } from 'src/app/models/funcionario';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(http: HttpClient) {
    http.get<funcionario[]>("http://localhost:3000/funcionario/listar").subscribe((funcionarios)=>{
      console.log(funcionarios);
    });
  }

  ngOnInit(): void {


  }

}
