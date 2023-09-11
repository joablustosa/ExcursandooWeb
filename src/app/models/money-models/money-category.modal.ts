export class MoneyCategoryModel{
    constructor(
      public id: number,
      public checklist: string,
      public user_created: number,
      public datetime_created: string,
      public user_status: number,
      public datetime_status: string,
      public status: number,
    ){
  
    }
  }