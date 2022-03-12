import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyalBasicComponent } from './royal-basic.component';

describe('RoyalBasicComponent', () => {
  let component: RoyalBasicComponent;
  let fixture: ComponentFixture<RoyalBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoyalBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyalBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
