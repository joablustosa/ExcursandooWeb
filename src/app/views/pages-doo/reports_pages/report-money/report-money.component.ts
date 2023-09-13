import { Component, OnInit } from '@angular/core';
import { DataTable } from 'simple-datatables';

@Component({
  selector: 'app-report-money',
  templateUrl: './report-money.component.html',
  styleUrls: ['./report-money.component.scss']
})
export class ReportMoneyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }
}
