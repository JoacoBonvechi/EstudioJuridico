import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefensasPenalesComponent } from './defensas-penales.component';

describe('DefensasPenalesComponent', () => {
  let component: DefensasPenalesComponent;
  let fixture: ComponentFixture<DefensasPenalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefensasPenalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefensasPenalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
