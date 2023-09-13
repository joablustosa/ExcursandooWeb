import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderPagesComponent } from './provider-pages.component';

describe('ProviderPagesComponent', () => {
  let component: ProviderPagesComponent;
  let fixture: ComponentFixture<ProviderPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
