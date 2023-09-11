import { DatePipe } from '@angular/common';

export class TripTrevelerModel{
  constructor(
    public id: number,
    public id_treveler: number,
    public user_created: number,
    public datetime_created: String,
    public user_status: number,
    public datetime_status: String,
    public status: number,
  ){

  }
}

export class TrevelerModel{
  constructor(
    public id: number,
    public id_trip: number,
    public name: String,
    public email: String,
    public phone: String,
    public cpf: String,
    public document: String,
    public address: String,
    public city: String,
    public born: String,
    public id_user_created: number,
    public datetime_created: string,
  ){

  }
}