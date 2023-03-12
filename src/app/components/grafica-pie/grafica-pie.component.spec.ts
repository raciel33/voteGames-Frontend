import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaPieComponent } from './grafica-pie.component';

describe('GraficaPieComponent', () => {
  let component: GraficaPieComponent;
  let fixture: ComponentFixture<GraficaPieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficaPieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
