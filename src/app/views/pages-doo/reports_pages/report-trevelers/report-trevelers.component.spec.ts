import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTrevelersComponent } from './report-trevelers.component';

describe('ReportTrevelersComponent', () => {
  let component: ReportTrevelersComponent;
  let fixture: ComponentFixture<ReportTrevelersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportTrevelersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportTrevelersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
