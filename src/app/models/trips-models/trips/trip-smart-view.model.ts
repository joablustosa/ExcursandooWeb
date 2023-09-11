import { DatePipe } from '@angular/common';

export class TripSmartViewModel{
  constructor(
    public id: number,
    public title: String,
    public description: String,
    public date_start: string,
    public date_end: string,
    public hour_start: string,
    public hour_end: string,
    public value: number,
    public user_created: number,
    public datetime_created: string,
    public user_status: number,
    public datetime_status: string,
    public status: number,
  ){

  }
}