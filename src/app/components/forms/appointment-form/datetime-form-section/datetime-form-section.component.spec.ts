import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatetimeFormSectionComponent } from './datetime-form-section.component';

describe('DatetimeFormSectionComponent', () => {
  let component: DatetimeFormSectionComponent;
  let fixture: ComponentFixture<DatetimeFormSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatetimeFormSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatetimeFormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
