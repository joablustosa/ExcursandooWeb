import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetsPagesComponent } from './budgets-pages.component';

describe('BudgetsPagesComponent', () => {
  let component: BudgetsPagesComponent;
  let fixture: ComponentFixture<BudgetsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetsPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudgetsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
