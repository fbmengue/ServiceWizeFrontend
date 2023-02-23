import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-datetime-form-section',
  templateUrl: './datetime-form-section.component.html',
  styleUrls: ['./datetime-form-section.component.scss']
})
export class DatetimeFormSectionComponent {
  @Input() formGroupName!: string;
  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) { }

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }

  weekendFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

}
