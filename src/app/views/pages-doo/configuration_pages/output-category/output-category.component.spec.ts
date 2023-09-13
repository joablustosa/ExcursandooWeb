import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputCategoryComponent } from './output-category.component';

describe('OutputCategoryComponent', () => {
  let component: OutputCategoryComponent;
  let fixture: ComponentFixture<OutputCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
