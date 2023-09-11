import { DatePipe } from '@angular/common';

export class TripChecklistModel{
  constructor(
    public id: number,
    public id_trip: number,
    public checklist: String,
    public user_created: number,
    public datetime_created: string,
    public user_status: number,
    public datetime_status: string,
    public status: number,
  ){

  }
}