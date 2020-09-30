import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai2FooterComponent } from './bai2-footer.component';

describe('Bai2FooterComponent', () => {
  let component: Bai2FooterComponent;
  let fixture: ComponentFixture<Bai2FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bai2FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bai2FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
