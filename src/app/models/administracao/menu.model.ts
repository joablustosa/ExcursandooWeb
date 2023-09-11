import { DatePipe } from '@angular/common';

export class Menu{
  constructor(
    public id: number,
    public nome: string,
    public url: string,
    public agrupador: string,
    public icone: string
  ){

  }
}

export class UserAud{
  Menus: Menu[] = [];
}

export class PaginaModel{
  constructor(
    public id: number,
    public name_page: String,
    public route: String,
    public group_menu: String,
    public icon: String
  ){

  }
}
