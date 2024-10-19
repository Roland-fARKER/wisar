import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtsProdComponent } from './lts-prod.component';

describe('LtsProdComponent', () => {
  let component: LtsProdComponent;
  let fixture: ComponentFixture<LtsProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LtsProdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LtsProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
