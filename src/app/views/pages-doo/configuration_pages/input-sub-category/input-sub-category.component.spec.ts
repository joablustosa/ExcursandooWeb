import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSubCategoryComponent } from './input-sub-category.component';

describe('InputSubCategoryComponent', () => {
  let component: InputSubCategoryComponent;
  let fixture: ComponentFixture<InputSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSubCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
