import { Component, OnInit } from '@angular/core';
import { DataTable } from 'simple-datatables';

@Component({
  selector: 'app-all-trips',
  templateUrl: './all-trips.component.html',
  styleUrls: ['./all-trips.component.scss']
})
export class AllTripsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }
}
