import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class FormService {
  private selectedForm!: string;

  constructor() { }


  public toggleForm(selectedForm: string):void {
    switch (selectedForm) {
      case 'client':
        this.selectedForm = 'client';
        break;
      case 'service':
        this.selectedForm = 'service';
        break;
      case 'appointment':
        this.selectedForm = 'appointment';
        break;
      case 'professional':
        this.selectedForm = 'professional';
        break;
      default: this.selectedForm = 'menu';
    }
    
  }

  get form(): string {
    return this.selectedForm;
  }
  



}
