import { DatePipe } from '@angular/common';

export class NovoUsuario{
  constructor(
    public id: number,
    public usuarioLogin: String,
    public chaveDeAcesso: String,
    public lastName: String,
    public address: String,
    public firstName: String,
    public city: String,
    public cpf: String,
    public born: String,
    public image: String,
    public dooName: String,
    public email: String,
    public contact: String,
    public whatsapp: String,
    public instagram: String,
    public facebook: String,
    public linkedin: String,
    public userType: number,
    public accountType: number,
    public userStatus: number,
    public dateTimeStatus: String,
    public status: number,
  ){

  }
}