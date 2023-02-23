import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.scss']
})
export class ServiceFormComponent {
  public form: FormGroup;
  public busy = false;


  constructor(
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(50),
        Validators.required,
      ])],
      duration: ['', Validators.compose([
        Validators.required,
        
      ])],
      price: ['', Validators.compose([
        Validators.required,
        
      ])],
      professional: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }

  get errorServiceMessage(): string {
    const form: FormControl = (this.form.get('name') as FormControl);
    return form.hasError('required') ?
      'Service name is required' :
      form.hasError('maxlength') ?
        'Service name is too long' :
        form.hasError('minlength') ?
          'Service name is too short' : '';
  }

  get errorDurationMessage(): string {
    const form: FormControl = (this.form.get('duration') as FormControl);
    return form.hasError('required') ?
      'Duration is required' : '';
  }

  get errorPriceMessage(): string {
    const form: FormControl = (this.form.get('price') as FormControl);
    return form.hasError('required') ?
      'Price is required' : '';
  }

  get errorProfessionalMessage(): string {
    const form: FormControl = (this.form.get('professional') as FormControl);
    return form.hasError('required') ?
      'Professional is required' : '';
  }

 
}
