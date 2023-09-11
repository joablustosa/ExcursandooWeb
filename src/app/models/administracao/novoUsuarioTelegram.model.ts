import { DatePipe } from '@angular/common';

export class NovoUsuarioTelegram{
  constructor(
    public id: number,
    public first_name: String,
    public last_name: String,
    public username: String,
    public is_admin: boolean
  ){

  }
}
