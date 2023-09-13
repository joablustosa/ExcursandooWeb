import { Component, OnInit } from '@angular/core';
import { DataTable } from 'simple-datatables';

@Component({
  selector: 'app-report-trevelers',
  templateUrl: './report-trevelers.component.html',
  styleUrls: ['./report-trevelers.component.scss']
})
export class ReportTrevelersComponent implements OnInit {

  constructor() { }

  
  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }
}
