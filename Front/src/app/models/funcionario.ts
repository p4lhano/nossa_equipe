<<<<<<< HEAD
export class Funcionario{
/*
! Obrigatório
? opcional | não obrigatório
*/
    _id?: string;
    status?: string;
    cpf?: string;
    cnh?: string;
    cargo?: string;
    createdAt?: string;
    updatedAt?: string;
    dataNascimento?: string;
    nome?: string;
    salario?: string;
    setor?: string;
    __v?: string;
=======
export class Funcionario {
    _id?: string;    
    status!: string;
    nome!: string;
    cpf!: string;
    cargo!: string;
    salario!: string;
    setor?: string;
    dataNascimento?: Date;
    createdAt?: Date;
    updatedAt?: Date;
>>>>>>> 028c442d78ecbb7b7019a7843cc2fdbbb44e2195
}