import { DatePipe } from '@angular/common';

export class TripModel{
  constructor(
    public id: number, 
    public title: string, 
    public description: string,
    public id_arrival: number,
    public id_departure: number,
    public arrival: string,
    public departure: string,
    public date_start: string,
    public date_end: string,
    public hour_start: string,
    public hour_end: string,
    public value: number,
    public reference_point: string,
    public user_created: number,
    public datetime_created: string,
    public user_status: number,
    public datetime_status: string,
    public status: number,
    public image: string,
    public OldValue: number,
  ){

  }
}

export class TripWithTrevelerModel{
  constructor(
    public id: number, 
    public title: string, 
    public description: string,
    public id_arrival: number,
    public id_departure: number,
    public arrival: string,
    public departure: string,
    public date_start: string,
    public date_end: string,
    public hour_start: string,
    public hour_end: string,
    public value: number,
    public reference_point: string,
    public user_created: number,
    public datetime_created: string,
    public user_status: number,
    public datetime_status: string,
    public status: number,
    public image: string,
    public OldValue: number,
    public trevelers: string,
  ){

  }
}
export class TripBoardingPoint{
  constructor(
    public id: number, 
    public id_trip: number, 
    public id_boarding: number,
    public user_created: number,
    public datetime_created: string,
    public user_status: number,
    public datetime_status: string,
    public status: number,
    public reference_point: string,
    public addess: string,
    public datetime_boarding: string,
  ){

  }
}