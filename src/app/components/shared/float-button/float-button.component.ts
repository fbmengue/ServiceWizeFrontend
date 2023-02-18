import { Component, ComponentFactoryResolver, ComponentRef, EventEmitter, Input, OnInit, Output, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { FormService } from '../../../services/form.service';
import { SideNavService } from '../../../services/sidenav.service';
import { ClientFormComponent } from '../../forms/client-form/client-form.component';
import { ServiceFormComponent } from '../../forms/service-form/service-form.component';

@Component({
  selector: 'app-float-button',
  templateUrl: './float-button.component.html',
  styleUrls: ['./float-button.component.scss']
})
export class FloatButtonComponent {
  public openMenu: boolean = false;
  isOver = false;
  //@Input() formOption: string = 'none';

  constructor(private sideNavService: SideNavService, private formService: FormService) {

  }
  

  sidenavOpenForm(form: string) {
    this.formService.toggleForm(form);
    this.sideNavService.toggle();
    
  }

  clickFloatMenu() {
    this.openMenu = !this.openMenu;
  }
 
  //ClickSidenavMenu() {
  //  this.sideNavService.toggle();
  //}

 


  


  
}
