import { DatePipe } from '@angular/common';

export class PaymentMethod{
  constructor(
    public id: number,
    public name: String,
    public user_created: number, 
    public datetime_created: String,
    public user_status: number, 
    public datetime_status: String,
    public status: number
  ){

  }
}