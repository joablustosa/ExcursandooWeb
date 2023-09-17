import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { DataTable } from 'simple-datatables';
import { TripModel } from 'src/app/models/trips-models/trips/trip.model';
import { TripService } from 'src/app/services/trips-services/trip.service';

@Component({
  selector: 'app-all-trips',
  templateUrl: './all-trips.component.html',
  styleUrls: ['./all-trips.component.scss']
})
export class AllTripsComponent implements OnInit {
  trips: TripModel[] = [];
  loadingIndicator = true;
  reorderable = true;
  ColumnMode = ColumnMode;
  offset = 0;
  itemsPerPage = 10;
  filter: string = '';
  rows = [];
  columns = [];
  page = {
    size: 20,
    count: 0,
    offset: 0
  };

  constructor(
    private http: HttpClient,
    private tripService: TripService
    ) {}

  ngOnInit(): void {
    this.getDataTrips();
    const dataTable = new DataTable("#dataTableExample");
  }

  getDataTrips() {
    this.tripService.getAllTrip().subscribe(
      data => {
      this.trips = data as TripModel[];
      this.page.count = this.trips.length;
    });
  }

  onPageChange(event: any) {
    this.page.offset = event.offset;
    this.getDataTrips();
  }
  
  get filteredData() {
    return this.trips.filter(item => {
      return Object.values(item).some(value =>
        value.toString().toLowerCase().includes(this.filter.toLowerCase())
      );
    });
  }

  updatePage(event: any) {
    this.offset = (event.page - 1) * this.itemsPerPage;
    this.getDataTrips();
  }

}
