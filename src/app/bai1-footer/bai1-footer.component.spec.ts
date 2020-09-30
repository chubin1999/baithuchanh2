import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai1FooterComponent } from './bai1-footer.component';

describe('Bai1FooterComponent', () => {
  let component: Bai1FooterComponent;
  let fixture: ComponentFixture<Bai1FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai1FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai1FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
