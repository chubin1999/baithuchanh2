import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai1HearderComponent } from './bai1-hearder.component';

describe('Bai1HearderComponent', () => {
  let component: Bai1HearderComponent;
  let fixture: ComponentFixture<Bai1HearderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai1HearderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai1HearderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
