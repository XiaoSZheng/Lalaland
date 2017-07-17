import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular4StartUpComponent } from './angular4-start-up.component';

describe('Angular4StartUpComponent', () => {
  let component: Angular4StartUpComponent;
  let fixture: ComponentFixture<Angular4StartUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular4StartUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular4StartUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
