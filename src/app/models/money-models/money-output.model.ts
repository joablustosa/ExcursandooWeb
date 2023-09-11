import { DatePipe } from '@angular/common';

export class MoneyOutputType{
  constructor(
    public id: number,
    public output_type: String,
    public user_created: String,
    public datetime_created: String,
    public user_status: String,
    public datetime_status: String,
    public status: number
  ){

  }
}