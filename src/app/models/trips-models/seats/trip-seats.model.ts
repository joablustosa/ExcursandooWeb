import { DatePipe } from '@angular/common';

export class TripSeatsModel{
  constructor(
    public id: number,
    public id_trip: number,
    public seats: number,
    public user_created: number,
    public datetime_created: String,
    public user_status: number,
    public datetime_status: String,
    public status: number,
  ){

  }
}