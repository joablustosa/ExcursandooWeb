import { DatePipe } from '@angular/common';

export class MessageModel{
  constructor(
    public id: number,
    public message: string,
    public id_treveler: number,
    public id_excurseiro: number,
    public user_created: number,
    public datetime_created: String,
    public user_status: number,
    public datetime_status: String,
    public status: number,
  ){

  }
}