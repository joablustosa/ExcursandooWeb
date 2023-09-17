import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checklists-pages',
  templateUrl: './checklists-pages.component.html',
  styleUrls: ['./checklists-pages.component.scss']
})
export class ChecklistsPagesComponent implements OnInit {
  public isAsideNavCollapsed = true;
  selectedItem: string = '';
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  selected(item: string, id: number) {
    this.selectedItem = item;
    this.router.navigate([`/checklists/${id}`])
  }

}
