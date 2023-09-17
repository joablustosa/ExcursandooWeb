import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllChecklistComponent } from './list-all-checklist.component';

describe('ListAllChecklistComponent', () => {
  let component: ListAllChecklistComponent;
  let fixture: ComponentFixture<ListAllChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllChecklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
