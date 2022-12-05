import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepisasComponent } from './repisas.component';

describe('RepisasComponent', () => {
  let component: RepisasComponent;
  let fixture: ComponentFixture<RepisasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepisasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepisasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
