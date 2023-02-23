import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFormSectionComponent } from './client-form-section.component';

describe('ClientFormSectionComponent', () => {
  let component: ClientFormSectionComponent;
  let fixture: ComponentFixture<ClientFormSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientFormSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientFormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
