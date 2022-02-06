import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeStatComponent } from './change-stat.component';

describe('ChangeStatComponent', () => {
  let component: ChangeStatComponent;
  let fixture: ComponentFixture<ChangeStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
