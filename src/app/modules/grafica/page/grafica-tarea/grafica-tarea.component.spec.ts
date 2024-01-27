import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaTareaComponent } from './grafica-tarea.component';

describe('GraficaTareaComponent', () => {
  let component: GraficaTareaComponent;
  let fixture: ComponentFixture<GraficaTareaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficaTareaComponent]
    });
    fixture = TestBed.createComponent(GraficaTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
