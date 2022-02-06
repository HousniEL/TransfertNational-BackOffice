import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfertInfoComponent } from './transfert-info.component';

describe('TransfertInfoComponent', () => {
  let component: TransfertInfoComponent;
  let fixture: ComponentFixture<TransfertInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfertInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfertInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
