import { Component, OnInit } from '@angular/core';
import { DataTable } from 'simple-datatables';

@Component({
  selector: 'app-report-trips',
  templateUrl: './report-trips.component.html',
  styleUrls: ['./report-trips.component.scss']
})
export class ReportTripsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }
}
