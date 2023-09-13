import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistsPagesComponent } from './checklists-pages.component';

describe('ChecklistsPagesComponent', () => {
  let component: ChecklistsPagesComponent;
  let fixture: ComponentFixture<ChecklistsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecklistsPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecklistsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
