import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai2HeaderComponent } from './bai2-header.component';

describe('Bai2HeaderComponent', () => {
  let component: Bai2HeaderComponent;
  let fixture: ComponentFixture<Bai2HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai2HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai2HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
