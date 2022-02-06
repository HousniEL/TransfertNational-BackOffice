import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherInfoClientComponent } from './afficher-info-client.component';

describe('AfficherInfoClientComponent', () => {
  let component: AfficherInfoClientComponent;
  let fixture: ComponentFixture<AfficherInfoClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherInfoClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherInfoClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
