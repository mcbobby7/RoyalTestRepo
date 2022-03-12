import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoyalCorporateComponent } from './royal-corporate.component';

describe('RoyalCorporateComponent', () => {
  let component: RoyalCorporateComponent;
  let fixture: ComponentFixture<RoyalCorporateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoyalCorporateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoyalCorporateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
