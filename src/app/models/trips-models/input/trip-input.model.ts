import { DatePipe } from '@angular/common';

export class TripInputModel{
  constructor(
    public id: number,
    public input_or_output_type: number,
    public id_input_type: number,
    public id_output_type: number,
    public id_sub_input_type: number,
    public id_sub_output_type: number,
    public id_trip: number,
    public value: number,
    public datetime_payday: String,
    public user_created: number,
    public datetime_created: String,
    public user_status: number,
    public datetime_status: String,
    public status: number,
  ){

  }
}