import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages-pages',
  templateUrl: './messages-pages.component.html',
  styleUrls: ['./messages-pages.component.scss']
})
export class MessagesPagesComponent implements OnInit {

  defaultNavActiveId = 1;

  constructor() { }

  ngOnInit(): void { }

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
