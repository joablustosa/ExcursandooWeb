import { DatePipe } from '@angular/common';

export class MoneyInputModel{
  constructor(
    public id: number,
    public usuarioLogin: String,
    public chaveDeAcesso: String,
    public nome: String,
    public sobrenome: String,
    public permissaoLogin: number
  ){

  }
}

export class AccountModel{
  constructor(
    public input_or_output_type: number,
    public id_input_type: number,
    public id_output_type: number,
    public id_sub_input_type: number,
    public id_sub_output_type: number,
    public id_payment_type: number,
    public id_trip: number,
    public value: number,
    public datetime_payday: String,
    public user_created: number,
    public datetime_created: String,
    public user_status: number,
    public datetime_status: String,
    public status: number,
    public id_trip_treveler: number,
    public id_payment_method: number,
  ){

  }
}

export class AccountTroTrip{
  constructor(
    public id: number,
    public type_pay: string,
    public type: string,
    public subtype: string,
    public pay_value: number,
    public name_treveler: string,
    public payment_method: string,
    public datetime_payday: string
  ){

  }
}