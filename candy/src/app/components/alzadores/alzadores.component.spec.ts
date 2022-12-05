import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlzadoresComponent } from './alzadores.component';

describe('AlzadoresComponent', () => {
  let component: AlzadoresComponent;
  let fixture: ComponentFixture<AlzadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlzadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlzadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
