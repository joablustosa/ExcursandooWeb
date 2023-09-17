import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Observable, startWith, map } from 'rxjs';
import { PaymentMethod } from 'src/app/models/money-models/money-payment-method.model';
import { TripComponentModel, ComponentModel } from 'src/app/models/trips-models/trips/component.model';
import { TripModel, TripBoardingPoint } from 'src/app/models/trips-models/trips/trip.model';
import { FileReaderService } from 'src/app/services/file-reader.service';
import { PaymentMethodService } from 'src/app/services/money-services/payment_method.service';
import { AddressSearchService } from 'src/app/services/trips-services/address-search.service';
import { BoardingPointService } from 'src/app/services/trips-services/boarding_point/boarding_point.service';
import { ComponentService } from 'src/app/services/trips-services/component.service';
import { TripService } from 'src/app/services/trips-services/trip.service';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.scss']
})
export class NewTripComponent implements OnInit {
  idUsuarioLogado = parseInt(localStorage.getItem('usuarioSessao')!);
  dataAtual = new Date();
  hours: number[] = [];
  previewImages: string | ArrayBuffer = '';
  selectedImages!: File;
  trip!: TripModel;
  
  public pointsReference = [];
  public components: Component[] = [];
  public tempComponents = [];

  dadosOrdenados: any[] = [];
  columnsName = ["hour", "point", "action"];
  columnsNameComponent = ["name", "description", "action"];

  firstFormGroup!: FormGroup;
  registerFormPointReference!: FormGroup;
  registerFormComponent!: FormGroup;

  controlComponent = new FormControl;
  componentsAutoComplete: any[] = [];
  componentsFilter!: Observable<any[]>;
  
  paymentsControl = new FormControl;
  selectedFiles: FileList | null;

  address: any = {};
  componentTemp: any;
  pointReferenceTemp: any;
  payments_methodsTemp: any;

  componentsToSend: ComponentModel[] = [];
  paymentMethodsToSend: PaymentMethod[] = [];
  boardingPointsToSend: TripBoardingPoint[] = [];

  selectedDateStart: NgbDateStruct;
  timeStart = {hour: 0, minute: 0};
  
  constructor(
    private _formBuilder: FormBuilder,
    // private toastr: ToastrService,
    // private spinner: NgxSpinnerService,
    private addressSearchService: AddressSearchService,
    private fileService: FileReaderService,
    private tripService: TripService,
    private componentService: ComponentService,
    private paymentMethodService: PaymentMethodService,
    private boardingPointService: BoardingPointService
    ) {
      this.selectedFiles = null;
    }

  ngOnInit(): void {
    this.getComponents();
    this.validation();
    for (let i = 0; i < 24; i++) {
      this.hours.push(i);
    }
  }
  
  onImageSelected(event: any): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files) {
      const newImages = inputElement.files;
      this.selectedImages = newImages[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewImages = e.target?.result || '';
      };
      reader.readAsDataURL(this.selectedImages);
    }
  }

  saveTrip(){
    if(this.selectedImages != undefined && this.selectedImages != null){
      this.fileService.uploadFiles(this.selectedImages).subscribe(
        (response: any) => {
          var tripTemp = Object.assign({}, this.firstFormGroup.value);
          var paymentsTemp = Object.assign({}, this.paymentsControl.value);
          this.trip = Object.assign({
            title: tripTemp.title, 
            description: tripTemp.description, 
            id_arrival: 1, 
            id_departure: 1, 
            arrival: tripTemp.arrival, 
            departure: tripTemp.departure, 
            date_start: tripTemp.date_start.toISOString(), 
            date_end: tripTemp.date_end.toISOString(),
            hour_start: tripTemp.date_start.toISOString().substring(0,10) + "T" + (tripTemp.hour_start < 10 ? "0"+ tripTemp.hour_start : tripTemp.hour_start) +":00:00.000Z", 
            hour_end: tripTemp.date_end.toISOString().substring(0,10) + "T" + (tripTemp.hour_end < 10 ? "0"+ tripTemp.hour_end : tripTemp.hour_end) +":00:00.000Z", 
            value: parseFloat(tripTemp.value), 
            reference_point: "", 
            user_created: this.idUsuarioLogado, 
            datetime_created: this.dataAtual.toISOString(), 
            user_status:  this.idUsuarioLogado, 
            datetime_status: this.dataAtual.toISOString(), 
            status:  0, 
            image: response.docUrl, 
            OldValue: 100, 
            seats:  parseInt(tripTemp.seats), 
            address: tripTemp.address, 
            neighborhood: tripTemp.neighborhood,
          });
          this.tripService.saveTrip(this.trip).subscribe(
            (response: any) => {
            if(response){
              for(let i = 0; i < this.tempComponents.length; i++){
                this.componentTemp = Object.assign({
                  id_trip: response.id,
                  // id_component: this.tempComponents[i].id,
                  user_created: this.idUsuarioLogado,
                  datetime_created: this.dataAtual,
                  user_status: this.idUsuarioLogado,
                  datetime_status: this.dataAtual
                });
              this.componentsToSend.push(this.componentTemp);
              }
              for(let u = 0; u < this.pointsReference.length; u++){
                this.pointReferenceTemp = Object.assign({
                  id_trip: response.id,
                  id_boarding_point: 1,
                  user_created: this.idUsuarioLogado,
                  datetime_created: this.dataAtual,
                  user_status: this.idUsuarioLogado,
                  datetime_status: this.dataAtual,
                  // reference_point: this.pointsReference[u].reference_point,
                  // addess: this.pointsReference[u].addess,
                  // datetime_boarding: this.pointsReference[u].datetime_boarding,
                });
                this.boardingPointsToSend.push(this.pointReferenceTemp);
              }
              for(let e = 0; e < paymentsTemp.length; e++){
                this.payments_methodsTemp = Object.assign({
                  id_trip: response.id,
                  id_payments_method: paymentsTemp[e].id,
                  user_created: this.idUsuarioLogado,
                  datetime_created: this.dataAtual,
                  user_status: this.idUsuarioLogado,
                  datetime_status: this.dataAtual
                });
                this.paymentMethodsToSend.push(this.payments_methodsTemp);
              }
              this.saveComponents(this.componentsToSend);
              this.saveBoardingPoints(this.boardingPointsToSend);
              this.savePaymentMethods(this.paymentMethodsToSend);
            }else{
            }
          });
        });
      }else{
            var tripTemp = Object.assign({}, this.firstFormGroup.value);
            var paymentsTemp = Object.assign({}, this.paymentsControl.value);
            this.trip = Object.assign({
              title: tripTemp.title, 
              description: tripTemp.description, 
              id_arrival: 1, 
              id_departure: 1, 
              arrival: tripTemp.arrival, 
              departure: tripTemp.departure, 
              date_start: tripTemp.date_start.toISOString(), 
              date_end: tripTemp.date_end.toISOString(),
              hour_start: tripTemp.date_start.toISOString().substring(0,10) + "T" + (tripTemp.hour_start < 10 ? "0"+ tripTemp.hour_start : tripTemp.hour_start) +":00:00.000Z", 
              hour_end: tripTemp.date_end.toISOString().substring(0,10) + "T" + (tripTemp.hour_end < 10 ? "0"+ tripTemp.hour_end : tripTemp.hour_end) +":00:00.000Z", 
              value: parseFloat(tripTemp.value), 
              reference_point: "", 
              user_created: this.idUsuarioLogado, 
              datetime_created: this.dataAtual.toISOString(), 
              user_status:  this.idUsuarioLogado, 
              datetime_status: this.dataAtual.toISOString(), 
              status:  0, 
              image: "https://cdn-icons-png.flaticon.com/512/1695/1695213.png", 
              OldValue: 100, 
              seats:  parseInt(tripTemp.seats), 
              address: tripTemp.address, 
              neighborhood: tripTemp.neighborhood,
            });
            this.tripService.saveTrip(this.trip).subscribe(
              (response: any) => {
              if(response){
                for(let i = 0; i < this.tempComponents.length; i++){
                  this.componentTemp = Object.assign({
                    id_trip: response.id,
                    // id_component: this.tempComponents[i].id,
                    user_created: this.idUsuarioLogado,
                    datetime_created: this.dataAtual,
                    user_status: this.idUsuarioLogado,
                    datetime_status: this.dataAtual
                  });
                this.componentsToSend.push(this.componentTemp);
                }
                for(let u = 0; u < this.pointsReference.length; u++){
                  this.pointReferenceTemp = Object.assign({
                    id_trip: response.id,
                    id_boarding_point: 1,
                    user_created: this.idUsuarioLogado,
                    datetime_created: this.dataAtual,
                    user_status: this.idUsuarioLogado,
                    datetime_status: this.dataAtual,
                    // reference_point: this.pointsReference[u].reference_point,
                    // addess: this.pointsReference[u].addess,
                    // datetime_boarding: this.pointsReference[u].datetime_boarding,
                  });
                  this.boardingPointsToSend.push(this.pointReferenceTemp);
                }
                for(let e = 0; e < paymentsTemp.length; e++){
                  this.payments_methodsTemp = Object.assign({
                    id_trip: response.id,
                    id_payments_method: paymentsTemp[e].id,
                    user_created: this.idUsuarioLogado,
                    datetime_created: this.dataAtual,
                    user_status: this.idUsuarioLogado,
                    datetime_status: this.dataAtual
                  });
                  this.paymentMethodsToSend.push(this.payments_methodsTemp);
                }
                this.saveComponents(this.componentsToSend);
                this.saveBoardingPoints(this.boardingPointsToSend);
                this.savePaymentMethods(this.paymentMethodsToSend);
              }else{
              }
            });
      }
    
  }

  saveComponents(components: ComponentModel[]){
    this.componentService.postList(components).subscribe(
      response => {}, error => {

      }
    );
  }

  saveBoardingPoints(boardingPoints: TripBoardingPoint[]){
    this.boardingPointService.postList(boardingPoints).subscribe(
      response => {}, error => {

      }
    );
  }

  savePaymentMethods(paymentMethods: PaymentMethod[]){
    this.paymentMethodService.postList(paymentMethods).subscribe(
      response => {}, error => {

      }
    );
  }


  
  validation(){
    this.firstFormGroup = this._formBuilder.group({
      title: ['', Validators.required],
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      date_start: ['', Validators.required],
      hour_start: ['', Validators.required],
      date_end: ['', Validators.required],
      hour_end: ['', Validators.required],
      boarding_point: ['', Validators.required],
      seats: ['', Validators.required],
      address: [''],
      neighborhood: [''],
      image: ['', Validators.required],
      value: [0, Validators.required],
      description: ['', Validators.required]
    });
    
    this.registerFormPointReference = this._formBuilder.group({
      datetime_boarding: ['', Validators.required],
      reference_point: ['', Validators.required],
      addess: ['', Validators.required],
    });
    
    this.registerFormComponent = this._formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });
    
  }

  onAddressInput(event: any) {
    const cep = event.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (cep.length === 8) {
      this.addressSearchService.searchAddress(cep)
        .subscribe(data => {
          this.address = data;
        });
    } else {
      this.address = {}; // Limpa os dados do endereço se o CEP não estiver completo
    }
  }

  openWindowPoints(template: any){
    template.show(template)
  }

  addPoint(){
    // const randomElementIndex = Math.random() + this.pointsReference.data.length;
    // var pointTemp = Object.assign({id: randomElementIndex}, this.registerFormPointReference.value);
    // this.pointsReference.push(pointTemp);
    // this.tablePointReference.renderRows();
    this.registerFormPointReference.reset();
  }

  deletePoint(element: any){
    // this.pointsReference.data = this.pointsReference.data.filter((point: any) => point.id !== element.id);
    // this.tablePointReference.renderRows();
  }

  addComponent(){
    var componentTemp = Object.assign(this.controlComponent.value);
    // console.log(componentTemp)
    // this.tempComponents.data.push(componentTemp);
    // this.tempComponents.data = this.tempComponents.data;
    // this.tableComponent.renderRows();
    this.controlComponent.reset();
  }

  deleteComponent(element: any){
    // this.tempComponents.data = this.tempComponents.data.filter((component: any) => component.id !== element.id);
    // this.tableComponent.renderRows();
  }

  paymentOptions: string[] = [
    'Cartão de Crédito',
    'Cartão de Débito',
    'Boleto Bancário',
    'Transferência Bancária',
    'Parcelado com Excurseiro',
    'Dinheiro',
    'Cheque',
    'PIX',
    'Outra forma de pagamento'
  ];

  getComponents(){
    
    this.componentService.getAllComponents().subscribe(
      response => {
        this.components = response as Component[];
        this.componentsAutoComplete = response as any[];
      this.componentsFilter = this.controlComponent.valueChanges.pipe(
        startWith(''),
        map(value => {
          const name = typeof value === 'string' ? value : value?.name;
          return name ? this._componentFilter(name as string) : this.componentsAutoComplete.slice();
        }),
      );
      }
    )
  }

  formatItem(item: string): string {
    return item.toLowerCase().replace(/(^|\.)(\s*\w)/g, (match) => match.toUpperCase());
  }

  viewComponent(component: any): string {
    return component && component.name ? component.name : '';
  }

  private _componentFilter(component: string): any[] {
    const filterValueComponent = component.toLowerCase();
    return this.componentsAutoComplete.filter(component => component.name.toLowerCase().includes(filterValueComponent));
  }
}
