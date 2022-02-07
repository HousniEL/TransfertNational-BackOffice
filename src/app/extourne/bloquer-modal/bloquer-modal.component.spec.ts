import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloquerModalComponent } from './bloquer-modal.component';

describe('BloquerModalComponent', () => {
  let component: BloquerModalComponent;
  let fixture: ComponentFixture<BloquerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloquerModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloquerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
