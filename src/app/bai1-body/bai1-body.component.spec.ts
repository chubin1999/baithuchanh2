import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai1BodyComponent } from './bai1-body.component';

describe('Bai1BodyComponent', () => {
  let component: Bai1BodyComponent;
  let fixture: ComponentFixture<Bai1BodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai1BodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai1BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
