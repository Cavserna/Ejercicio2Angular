import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPersonajeComponent } from './dialog-personaje.component';

describe('DialogPersonajeComponent', () => {
  let component: DialogPersonajeComponent;
  let fixture: ComponentFixture<DialogPersonajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogPersonajeComponent]
    });
    fixture = TestBed.createComponent(DialogPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
