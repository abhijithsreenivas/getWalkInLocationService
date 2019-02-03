import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLocationListComponent } from './customer-location-list.component';

describe('CustomerLocationListComponent', () => {
  let component: CustomerLocationListComponent;
  let fixture: ComponentFixture<CustomerLocationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerLocationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerLocationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
