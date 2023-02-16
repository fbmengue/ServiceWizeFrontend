import { Component, ComponentFactoryResolver, Injector, OnInit,Type,ViewChild, ViewContainerRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SideNavService } from '../../../services/sidenav.service';

@Component({
  selector: 'app-sidenav-frame',
  templateUrl: './sidenav-frame.component.html',
  styleUrls: ['./sidenav-frame.component.scss']
})
export class SideNavPageComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) public sidenav!: MatSidenav;
  


  constructor(private sideNavService: SideNavService)  {}

  ngOnInit() {

    this.sideNavService.sideNavToggleSubject.subscribe(() => {
      this.sidenav.toggle();
      
    });


  }


  public selectServiceForm() {
    this.sideNavService.toggle();
    this.sideNavService.selectForm(1);
  }

  public selectClientForm() {
    this.sideNavService.toggle();
    this.sideNavService.selectForm(2);
  }


  
}
