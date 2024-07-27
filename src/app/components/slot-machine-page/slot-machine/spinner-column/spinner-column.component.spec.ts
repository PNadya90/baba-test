import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerColumnComponent } from './spinner-column.component';

describe('SpinnerColumnComponent', () => {
  let component: SpinnerColumnComponent;
  let fixture: ComponentFixture<SpinnerColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpinnerColumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpinnerColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
