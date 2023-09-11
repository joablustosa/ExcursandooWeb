import { DatePipe } from '@angular/common';

export class NovoPerfil{
  constructor(
    public id: number,
    public profile_name: String,
    public id_user_created: number,
    public datetime_created: String,
    public datetime_status: String,
    public id_user_status: number,
    public status: number,
  ){

  }
}

export class PerfilPagina{
  constructor(
    public id: number,
    public idProfile: number,
    public idPage: number,
    public userCreated: number,
    public dateTimeCreated: String,
    public userStatus: number,
    public dateTimeStatus: String,
    public status: number,
    )
    {
      
    }
}
