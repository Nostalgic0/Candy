import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejasComponent } from './bandejas.component';

describe('BandejasComponent', () => {
  let component: BandejasComponent;
  let fixture: ComponentFixture<BandejasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandejasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BandejasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
