import { DatePipe } from '@angular/common';

export class ChecklistItemModel{
  constructor(
    public id: number,
    public id_checklist: number,
    public title: String,
    public description: String,
    public image: String,
    public required: number,
    public user_created: number,
    public datetime_created: string,
    public user_status: number,
    public datetime_status: string,
    public status: number,
    public id_trip: number,
    public datetime_end: number,
  ){

  }
}