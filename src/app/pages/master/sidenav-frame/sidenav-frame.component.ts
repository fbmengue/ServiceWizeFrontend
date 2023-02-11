import { Component, OnInit,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SideNavService } from '../../../services/sidenav.service';

@Component({
  selector: 'app-sidenav-frame',
  templateUrl: './sidenav-frame.component.html',
  styleUrls: ['./sidenav-frame.component.scss']
})
export class SideNavPageComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) public sidenav!: MatSidenav;

  public openMenu: boolean = false;
  isOver = false;

  clickMenu() {
    this.openMenu = !this.openMenu;
  }

  hello(mex: string) {
    alert('Hello ' + mex + '!');
  }

  constructor(private sideNavService: SideNavService) {}

  ngOnInit() {

    this.sideNavService.sideNavToggleSubject.subscribe(() => {
      console.log(this.sidenav.toggle);

      this.sidenav.toggle();
      
    });
  } 


  
}
