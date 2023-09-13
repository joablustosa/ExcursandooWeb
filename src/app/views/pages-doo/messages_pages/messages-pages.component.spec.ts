import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesPagesComponent } from './messages-pages.component';

describe('MessagesPagesComponent', () => {
  let component: MessagesPagesComponent;
  let fixture: ComponentFixture<MessagesPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
