import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasPracticaComponent } from './areas-practica.component';

describe('AreasPracticaComponent', () => {
  let component: AreasPracticaComponent;
  let fixture: ComponentFixture<AreasPracticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreasPracticaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreasPracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
