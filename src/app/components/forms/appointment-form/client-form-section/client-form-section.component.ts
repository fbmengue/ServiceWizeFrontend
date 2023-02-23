import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-form-section',
  templateUrl: './client-form-section.component.html',
  styleUrls: ['./client-form-section.component.scss']
})
export class ClientFormSectionComponent {
  @Input() formGroupName!: string;
  form!: FormGroup;
  @Input() item!: string;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    console.log("item aqui" + this.item);
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }

}
