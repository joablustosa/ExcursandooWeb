import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsPagesComponent } from './reports-pages.component';

describe('ReportsPagesComponent', () => {
  let component: ReportsPagesComponent;
  let fixture: ComponentFixture<ReportsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
