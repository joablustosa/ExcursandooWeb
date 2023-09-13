import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputSubCategoryComponent } from './output-sub-category.component';

describe('OutputSubCategoryComponent', () => {
  let component: OutputSubCategoryComponent;
  let fixture: ComponentFixture<OutputSubCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputSubCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
