import { DatePipe } from '@angular/common';

export class Permissao{
  constructor(
    public id: number,
    public id_user: number,
    public id_page: number,
    public id_user_create: String,
    public datetime_create: String
  ){

  }
}

export class PerfilPagina{
  constructor(
    public id: number,
    public idPerfil: number,
    public Nome: string,
    public Agrupador: string,
    public Icone: string
  ){

  }
}

export class ProfileUser{
  constructor(
    public id: number,
    public id_user: number,
    public id_profile: string,
    public id_user_create: number,
    public datetime_create: string
  ){

  }
}