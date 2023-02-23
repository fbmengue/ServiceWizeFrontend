import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DatetimeFormSectionComponent } from './datetime-form-section/datetime-form-section.component';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent {
  appointmentForm!: FormGroup;
 

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      clientForm: this.fb.group({
        name: ['', Validators.compose([
          Validators.minLength(6),
          Validators.maxLength(50),
          Validators.required,
        ])],
        email: [],
        phone: [],
        date: []
      }),
      professionalForm: this.fb.group({
        professional: [],
        service: [],
        duration: [],
        price: []
      }),
      datetimeForm: this.fb.group({
        date: [],
        time: []
      })
    });
  }

  get errorNameMessage(): string {
    console.log(this.appointmentForm);
    return "1";
  }

  ngafterviewinit(): string {
  
      const form: FormControl = (this.appointmentForm.get('name') as FormControl);
      return form.hasError('required') ?
        'Email is required' :
        form.hasError('maxlength') ?
          'Email must have less then 50 caracters' :
          form.hasError('pattern') ?
            'Email is invalid: exemple@email.com' : '';

    
  }

 
}
