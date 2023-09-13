import { Component, OnInit } from '@angular/core';
import { DataTable } from 'simple-datatables';

@Component({
  selector: 'app-provider-pages',
  templateUrl: './provider-pages.component.html',
  styleUrls: ['./provider-pages.component.scss']
})
export class ProviderPagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }
}
