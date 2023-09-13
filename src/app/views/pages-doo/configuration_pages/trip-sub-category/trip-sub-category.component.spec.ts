import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripSubCategoryComponent } from './trip-sub-category.component';

describe('TripSubCategoryComponent', () => {
  let component: TripSubCategoryComponent;
  let fixture: ComponentFixture<TripSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripSubCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
