import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionario';
import { FuncionariosService } from 'src/app/services/funcionarios.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  funcionario: Funcionario = new Funcionario();
  constructor(private service: FuncionariosService) { }

  ngOnInit(): void {
  }

  cadastrar(): void{
    //this.funcionario = new Funcionario();
    this.service.cadastrar(this.funcionario).subscribe((funcionario) =>{
      console.log(funcionario);
    });
  }

}
