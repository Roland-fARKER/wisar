import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitiendaComponent } from './mitienda.component';

describe('MitiendaComponent', () => {
  let component: MitiendaComponent;
  let fixture: ComponentFixture<MitiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MitiendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MitiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
