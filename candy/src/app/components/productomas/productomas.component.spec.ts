import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductomasComponent } from './productomas.component';

describe('ProductomasComponent', () => {
  let component: ProductomasComponent;
  let fixture: ComponentFixture<ProductomasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductomasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
