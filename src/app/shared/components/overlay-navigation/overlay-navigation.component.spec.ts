import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayNavigationComponent } from './overlay-navigation.component';

describe('OverlayNavigationComponent', () => {
  let component: OverlayNavigationComponent;
  let fixture: ComponentFixture<OverlayNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
