import { DatePipe } from '@angular/common';

export class BoardingPointModel{
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public user_created: number,
    public datetime_created: string,
    public user_status: number,
    public datetime_status: string,
    public status: number,
    public id_trip: number
  ){

  }
}