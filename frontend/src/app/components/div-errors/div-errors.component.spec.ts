import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivErrorsComponent } from './div-errors.component';

describe('DivErrorsComponent', () => {
  let component: DivErrorsComponent;
  let fixture: ComponentFixture<DivErrorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DivErrorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DivErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
