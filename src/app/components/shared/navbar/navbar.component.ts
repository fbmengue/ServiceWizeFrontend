import { Component } from '@angular/core';
import { SideNavService } from '../../../services/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  title: string = "ServiceWize";

  constructor(private sideNavService: SideNavService) {

  }

  clickMenu() {
    this.sideNavService.toggle();
  }
} 
