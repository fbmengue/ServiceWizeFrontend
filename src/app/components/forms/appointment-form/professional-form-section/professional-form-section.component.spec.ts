import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalFormSectionComponent } from './professional-form-section.component';

describe('ProfessionalFormSectionComponent', () => {
  let component: ProfessionalFormSectionComponent;
  let fixture: ComponentFixture<ProfessionalFormSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalFormSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalFormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
