import { Component, ComponentFactoryResolver, Injector, Input, OnInit,Type,ViewChild, ViewContainerRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { FormService } from '../../../services/form.service';
import { SideNavService } from '../../../services/sidenav.service';

@Component({
  selector: 'app-sidenav-frame',
  templateUrl: './sidenav-frame.component.html',
  styleUrls: ['./sidenav-frame.component.scss']
})
export class SideNavPageComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) public sidenav!: MatSidenav;
  formSelected!: string;


  constructor(private sideNavService: SideNavService, private formService: FormService
    ) { }

  ngOnInit() {
    this.sideNavService.sideNavToggleSubject.subscribe(() => {
      this.sidenav.toggle();
      this.openForm();
    });
  }


  openForm() {
    this.formSelected = this.formService.form
  }


  
}
