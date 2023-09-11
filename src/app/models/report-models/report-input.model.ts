import { DatePipe } from '@angular/common';

export class ReportInputModel{
  constructor(
    public id: number,
    public usuarioLogin: String,
    public chaveDeAcesso: String,
    public nome: String,
    public sobrenome: String,
    public permissaoLogin: number
  ){

  }
}