import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarPaymentsComponent } from './calendar-payments.component';

describe('CalendarPaymentsComponent', () => {
  let component: CalendarPaymentsComponent;
  let fixture: ComponentFixture<CalendarPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarPaymentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
