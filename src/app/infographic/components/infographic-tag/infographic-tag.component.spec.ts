import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfographicTagComponent } from './infographic-tag.component';

describe('InfographicTagComponent', () => {
  let component: InfographicTagComponent;
  let fixture: ComponentFixture<InfographicTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfographicTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfographicTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
