import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionario';
import { FuncionariosService } from 'src/app/services/funcionarios.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  contador: number = 0; 
  funcionarios: Funcionario[] = [];
  constructor(private service: FuncionariosService) { }


  //onInit vai dizer oq fazer quando criar o objeto
  ngOnInit(): void {
    this.service.listar().subscribe((funcionarios)=>{
      console.log(funcionarios);
      this.funcionarios = funcionarios;
    });

  }
  incrementar(): void {
    this.contador++;
  }

}
