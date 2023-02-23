import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-professional-form',
  templateUrl: './professional-form.component.html',
  styleUrls: ['./professional-form.component.scss']
})
export class ProfessionalFormComponent {

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
      professional: ['', Validators.compose([
        Validators.required,
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

  get errorProfessionalMessage(): string {
    const form: FormControl = (this.form.get('professional') as FormControl);
    return form.hasError('required') ?
      'Professional is required' : '';
  }

}
