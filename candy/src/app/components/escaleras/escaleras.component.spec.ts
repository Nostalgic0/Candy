import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalerasComponent } from './escaleras.component';

describe('EscalerasComponent', () => {
  let component: EscalerasComponent;
  let fixture: ComponentFixture<EscalerasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalerasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscalerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
