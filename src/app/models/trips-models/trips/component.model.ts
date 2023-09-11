import { DatePipe } from '@angular/common';

export class TripComponentModel{
  constructor(
    public id: number, 
    public id_trip: number, 
    public id_component: number,
    public user_created: number,
    public datetime_created: string,
    public user_status: number,
    public datetime_status: string,
    public status: number
  ){

  }
}
export class ComponentModel{
  constructor(
    public id: number, 
    public name: string, 
    public description: string,
    public user_created: number,
    public datetime_created: string,
    public user_status: number,
    public datetime_status: string,
    public status: number
  ){

  }
}