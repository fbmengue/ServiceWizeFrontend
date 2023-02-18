import { Injectable, TemplateRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable(
  {
    providedIn: 'root'
    }
)
export class SideNavService {
  public sideNavToggleSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  

  constructor() { }


  public toggle() {
    return this.sideNavToggleSubject.next(null);
  }

 

  
  
}
