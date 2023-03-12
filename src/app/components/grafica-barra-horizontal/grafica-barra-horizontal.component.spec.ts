import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaBarraHorizontalComponent } from './grafica-barra-horizontal.component';

describe('GraficaBarraHorizontalComponent', () => {
  let component: GraficaBarraHorizontalComponent;
  let fixture: ComponentFixture<GraficaBarraHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaBarraHorizontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficaBarraHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
