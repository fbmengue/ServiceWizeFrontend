import { Component, ComponentFactoryResolver, ComponentRef, EventEmitter, Input, OnInit, Output, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
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
  public form: number = 0;
  
  constructor(private sideNavService: SideNavService) {

  }
  

  ClickSidenavMenu2() {
    this.sideNavService.toggle();

  }

 
  ClickSidenavMenu() {
    this.sideNavService.toggle();
  }

  clickFloatMenu() {
    this.openMenu = !this.openMenu;
  }


  


  hello(mex: string) {
    alert('Hello ' + mex + '!');
  }
}
