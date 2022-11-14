import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoMasComponent } from './producto-mas.component';

describe('ProductoMasComponent', () => {
  let component: ProductoMasComponent;
  let fixture: ComponentFixture<ProductoMasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoMasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoMasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});