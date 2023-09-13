import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyPagesComponent } from './money-pages.component';

describe('MoneyPagesComponent', () => {
  let component: MoneyPagesComponent;
  let fixture: ComponentFixture<MoneyPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
