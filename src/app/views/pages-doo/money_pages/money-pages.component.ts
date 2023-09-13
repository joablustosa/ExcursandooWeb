import { Component, OnInit } from '@angular/core';
import { DataTable } from 'simple-datatables';

@Component({
  selector: 'app-money-pages',
  templateUrl: './money-pages.component.html',
  styleUrls: ['./money-pages.component.scss']
})
export class MoneyPagesComponent implements OnInit {

  defaultNavActiveId = 1;

  constructor() { }

  ngOnInit(): void {
    const dataTable = new DataTable("#dataTableExample");
  }

  ngAfterViewInit(): void {

    // Show chat-content when clicking on chat-item for tablet and mobile devices
    document.querySelectorAll('.chat-list .chat-item').forEach(item => {
      item.addEventListener('click', event => {
        document.querySelector('.chat-content')!.classList.toggle('show');
      })
    });

  }

  // back to chat-list for tablet and mobile devices
  backToChatList() {
    document.querySelector('.chat-content')!.classList.toggle('show');
  }

  save() {
    console.log('passs');
    
  }

}
