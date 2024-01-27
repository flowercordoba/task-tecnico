import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaUserComponent } from './grafica-user.component';

describe('GraficaUserComponent', () => {
  let component: GraficaUserComponent;
  let fixture: ComponentFixture<GraficaUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraficaUserComponent]
    });
    fixture = TestBed.createComponent(GraficaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
