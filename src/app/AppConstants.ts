import { environment } from './../environments/environment';

export class AppConstants {

  public static get baseServidor(): string { return "http://localhost:53268/" }

  public static get baseLogin(): string { return this.baseServidor + 'api/login/v1' }
  public static get baseNovoUsuario(): string { return this.baseServidor + 'api/Users/v1' }
  public static get baseSystemProfiles(): string { return this.baseServidor + 'api/SystemProfiles/v1' }
  public static get baseSystemProfileUsers(): string { return this.baseServidor + 'api/SystemProfileUsers/v1' }
  public static get baseSystemPages(): string { return this.baseServidor + 'api/SystemPages/v1' }
  public static get baseSystemPageUsers(): string { return this.baseServidor + 'api/SystemPageUsers/v1' }
  public static get baseSystemPageProfiles(): string { return this.baseServidor + 'api/SystemPageProfiles/v1' }
  public static get basePermissao(): string { return this.baseServidor + 'api/Permissao/v1' }
  public static get basePaginas(): string { return this.baseServidor + 'api/SystemPages/v1' }
  public static get baseConfiguracaoPost(): string { return this.baseServidor + 'api/Configuracoes/v1' }
  public static get baseContas(): string { return this.baseServidor + 'api/Contas/v1' }
  public static get baseCustosRodoviarias(): string { return this.baseServidor + 'api/CustosRodoviarios/v1' }
  public static get baseCustoGaragens(): string { return this.baseServidor + 'api/CustosGaragens/v1' }
  public static get baseLog(): string { return this.baseServidor + 'api/Logs/v1' }

  //CHECKLIST
  public static get baseChecklist(): string { return this.baseServidor + 'api/Checklists/v1' }
  public static get baseChecklistCategories(): string { return this.baseServidor + 'api/ChecklistCategories/v1' }
  public static get baseChecklistItems(): string { return this.baseServidor + 'api/ChecklistItems/v1' }
  public static get baseChecklistSubCategories(): string { return this.baseServidor + 'api/ChecklistSubCategories/v1' }

  //MONEY
  public static get baseAccounts(): string { return this.baseServidor + 'api/AccountCashs/v1' }
  public static get baseInputTypes(): string { return this.baseServidor + 'api/InputTypes/v1' }
  public static get baseSubInputTypes(): string { return this.baseServidor + 'api/SubInputTypes/v1' }
  public static get baseOutputTypes(): string { return this.baseServidor + 'api/OutputTypes/v1' }
  public static get baseSubOutputTypes(): string { return this.baseServidor + 'api/SubOutputTypes/v1' }
  public static get basePaymentMethods(): string { return this.baseServidor + 'api/PaymentMethods/v1' }

  //TRIPS
  public static get baseTrevelers(): string { return this.baseServidor + 'api/Trevelers/v1' }
  public static get baseTrips(): string { return this.baseServidor + 'api/Trips/v1' }
  public static get baseBoardingPoints(): string { return this.baseServidor + 'api/BoardingPoints/v1' }
  public static get baseTripBoardingPoints(): string { return this.baseServidor + 'api/TripBoardingPoints/v1' }
  public static get baseTripTrevelers(): string { return this.baseServidor + 'api/TripTrevelers/v1' }
  public static get baseTripsWithTreveler(): string { return this.baseServidor + 'api/Trips/v1/TripsWithTrevelers' }
  public static get baseTripComponents(): string { return this.baseServidor + 'api/TripComponents/v1' }
  public static get baseTripPaymentMethods(): string { return this.baseServidor + 'api/TripPaymentMethods/v1' }
  public static get baseComponents(): string { return this.baseServidor + 'api/Components/v1' }

  //REPORTS
  public static get baseReports(): string { return this.baseServidor + 'api/Reports/v1' }

  //MESSAGES
  public static get baseMessages(): string { return this.baseServidor + 'api/Messages/v1' }

  public static get uploadMultipleFiles(): string { return this.baseServidor + 'api/File/v1/uploadFile'}

}

