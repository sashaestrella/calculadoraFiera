import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosIngresadosComponent } from './datos-ingresados.component';

describe('DatosIngresadosComponent', () => {
  let component: DatosIngresadosComponent;
  let fixture: ComponentFixture<DatosIngresadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosIngresadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosIngresadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
