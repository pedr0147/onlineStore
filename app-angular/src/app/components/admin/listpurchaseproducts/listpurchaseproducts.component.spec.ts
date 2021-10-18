import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpurchaseproductsComponent } from './listpurchaseproducts.component';

describe('ListpurchaseproductsComponent', () => {
  let component: ListpurchaseproductsComponent;
  let fixture: ComponentFixture<ListpurchaseproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpurchaseproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpurchaseproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
