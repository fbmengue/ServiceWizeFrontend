import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidator } from '../../../validators/custom.validators';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent {

  public form: FormGroup;
  public busy = false;
  public nameMessage: any;
  public emailMessage = "";

  constructor(
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(50),
        Validators.required,
      ])],
      phone: ['', Validators.compose([
        Validators.minLength(8),
        Validators.maxLength(10),
        Validators.required,
        Validators.pattern(/^9\d{8}$/)
      ])],
      email: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(50),
        Validators.required,
        Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),        
      ])],
      date: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }

  get errorNameMessage(): string {
    const form: FormControl = (this.form.get('name') as FormControl);
    return form.hasError('required') ?
      'Name is required' :
      form.hasError('maxlength') ?
        'Name must have less then 50 caracters' :
        form.hasError('minlength') ?
          'Name must be at least 5 caracters long' : '';
  }

  get errorEmailMessage(): string {
    const form: FormControl = (this.form.get('email') as FormControl);
    return form.hasError('required') ?
      'Email is required' :
      form.hasError('maxlength') ?
        'Email must have less then 50 caracters' :
        form.hasError('pattern') ?
          'Email is invalid: exemple@email.com' : '';
  }

  get errorPhoneMessage(): string {
    const form: FormControl = (this.form.get('phone') as FormControl);
    return form.hasError('required') ?
      'Mobile is required' :
        form.hasError('pattern') ?
          'Mobile is invalid' : '';
  }

  get errorDateMessage(): string {
    const form: FormControl = (this.form.get('date') as FormControl);
    return form.hasError('required') ?
      'Date is required' :
      form.hasError('maxlength') ?
        'Email must have less then 50 caracters' : '';
  }

  weekendFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

}
