import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioGestionComponent } from './horario-gestion.component';

describe('HorarioGestionComponent', () => {
  let component: HorarioGestionComponent;
  let fixture: ComponentFixture<HorarioGestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorarioGestionComponent]
    });
    fixture = TestBed.createComponent(HorarioGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
