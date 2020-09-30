import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai2MainComponent } from './bai2-main.component';

describe('Bai2MainComponent', () => {
  let component: Bai2MainComponent;
  let fixture: ComponentFixture<Bai2MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai2MainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai2MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
