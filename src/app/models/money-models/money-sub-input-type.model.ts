import { DatePipe } from '@angular/common';

export class SubInputType{
  constructor(
    public id: number,
    public sub_input_type: String,
    public user_created: number, 
    public datetime_created: String,
    public user_status: number, 
    public datetime_status: String,
    public status: number
  ){

  }
}