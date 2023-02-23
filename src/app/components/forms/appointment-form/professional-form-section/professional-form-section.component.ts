import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-professional-form-section',
  templateUrl: './professional-form-section.component.html',
  styleUrls: ['./professional-form-section.component.scss']
})
export class ProfessionalFormSectionComponent {
  @Input() formGroupName!: string;
  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }
}
