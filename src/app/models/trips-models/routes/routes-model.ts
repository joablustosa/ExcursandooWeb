import { DatePipe } from '@angular/common';

export class TripRouteModel{
  constructor(
    public id: number,
    public id_trip: number,
    public order: number,
    public location_name: number,
    public description: number,
    public user_created: number,
    public datetime_created: String,
    public user_status: number,
    public datetime_status: String,
    public status: number,
    public reference_point: string,
    public addess: string,
    public datetime_boarding: string,
  ){

  }
}