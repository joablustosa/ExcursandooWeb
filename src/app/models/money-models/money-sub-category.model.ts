import { DatePipe } from '@angular/common';

export class MoneySubCategoryModel{
  constructor(
    public id: number,
    public sub_category: String,
    public user_created: number,
    public datetime_created: string,
    public user_status: number,
    public datetime_status: string,
    public status: number,
  ){

  }
}